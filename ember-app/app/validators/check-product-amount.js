import BaseValidator from 'ember-cp-validations/validators/base';
import { inject } from '@ember/service';
import Builder from 'ember-flexberry-data/query/builder';

const CheckProductAmount = BaseValidator.extend({
  store: inject(),

  validate(value, options, model, /*attribute*/) {
    let store = this.get('store');
    let builder = new Builder(store, 'i-i-s-shop-storehouse');
    builder.selectByProjection('StorehouseE');

    return store.query('i-i-s-shop-storehouse', builder.build())
      .then(function(storehouses) {
        let products = {};
        storehouses.forEach(function (storehouse) { // перебираем склады
          let storeProducts = storehouse.get('storeProduct');
          storeProducts.forEach(function (storeProduct) { // перебиаем товары
            let productId = storeProduct.get('product.id');
            let amount = storeProduct.get('amount');

            if (products.hasOwnProperty(productId)) { // проверяем, имеются ли уже данные о товаре
              products[productId] += amount;
            } else {
              products[productId] = amount;
            }
          })
        });

        let product = model.get('product');
        if (product) {
          let productId = product.get('id');

          let maxAmount = products[productId] ? products[productId] : 0;
          if (maxAmount >= Number(value)) {
            return true;
          } else {
            let measure = product.get('measure');
            let message = maxAmount > 0 ?
                            `В наличии ${maxAmount} ${measure}`
                            : `Товар отсутствует на складе`;
            return message;
          }
        } else {
          return true;
        }
      }).catch(function() {
        return `Ошибка выполнения запроса к серверу`;
      });
  }
});

CheckProductAmount.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default CheckProductAmount;
