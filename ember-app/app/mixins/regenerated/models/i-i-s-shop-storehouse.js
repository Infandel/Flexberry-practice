import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number', { defaultValue: 1 }),
  address: DS.attr('string'),
  storekeeper: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  storeProduct: DS.hasMany('i-i-s-shop-store-product', { inverse: 'storehouse', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-shop-storehouse.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  address: {
    descriptionKey: 'models.i-i-s-shop-storehouse.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storekeeper: {
    descriptionKey: 'models.i-i-s-shop-storehouse.validations.storekeeper.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storeProduct: {
    descriptionKey: 'models.i-i-s-shop-storehouse.validations.storeProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StorehouseE', 'i-i-s-shop-storehouse', {
    number: attr('Номер', { index: 0 }),
    address: attr('Адрес', { index: 1 }),
    storekeeper: belongsTo('i-i-s-shop-employee', 'Кладовщик', {
      lastName: attr('~', { index: 3, hidden: true }),
      firstName: attr('~', { index: 4, hidden: true }),
      middleName: attr('~', { index: 5, hidden: true })
    }, { index: 2, displayMemberPath: 'lastName' }),
    storeProduct: hasMany('i-i-s-shop-store-product', 'Список товаров', {
      product: belongsTo('i-i-s-shop-product', 'Товар', {
        name: attr('~', { index: 1, hidden: true }),
        productCode: attr('~', { index: 2, hidden: true })
      }, { index: 0, displayMemberPath: 'name' }),
      amount: attr('Количество', { index: 3 })
    })
  });

  modelClass.defineProjection('StorehouseL', 'i-i-s-shop-storehouse', {
    number: attr('Номер', { index: 0 }),
    address: attr('Адрес', { index: 1 }),
    storekeeper: belongsTo('i-i-s-shop-employee', 'Кладовщик', {
      lastName: attr('Кладовщик', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
