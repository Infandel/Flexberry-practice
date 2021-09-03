import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';
import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as OrderItemMixin
} from '../mixins/regenerated/models/i-i-s-shop-order-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
  disabled: computed('order.isBlocked', function() {
    return this.get('order.isBlocked');
  })
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, OrderItemMixin, Validations, {
  taxes: 10,

  /*
   * Цена с налогом
   */
  _priceWTaxesChanged: on('init', observer('product', function() {
    if (!this.get('order.isBlocked')) {
      once(this, '_priceWTaxesCompute');
    }
  })),
  _priceWTaxesCompute: function() {
    let product = this.get('product');

    let result = 0; // При добавлении строки, когда товара еще нет
    if (product) {
      let price = Number(product.get('price'));
      let taxes = this.get('taxes') / 100 + 1;
      result = Number((price * taxes).toFixed(2)); // округление до 2 знаков
    }

    if (!this.get('isDeleted')) { // проверяем, что текущая модель не была удалена
      this.set('priceWTaxes', result);
    }
  },

  /*
   * Сумма заказа
   */
  _wholeSumChanged: on('init', observer('priceWTaxes','amount', function() {
    once(this, '_wholeSumCompute');
  })),
  _wholeSumCompute: function() {
    let priceWTaxes = this.get('priceWTaxes')
    let amount = this.get('amount')
    let result = 0;
    if (priceWTaxes && amount) {
      let amount = Number(this.get('amount'))
      result = Number((priceWTaxes * amount).toFixed(2)); // округление до 2 знаков
    }

    if (!this.get('isDeleted')) { // проверяем, что текущая модель не была удалена
      this.set('totalSum', result);
    }
  },

  /*
   * Стоимость заказа
   */
  _orderSumChanged: on('init', observer('totalSum', function() {
    once(this, '_orderSumCompute');
  })),
  _orderSumCompute: function() {
    let order = this.get('order');
    let items = order.get('orderItem');
    let newSum = 0;
    items.forEach(function (item) {
      newSum += Number(item.get('totalSum'));
    });

    if (!this.get('isDeleted')) {
      order.set('totalSum', newSum);
    }
  },
});

defineProjections(Model);

export default Model;
