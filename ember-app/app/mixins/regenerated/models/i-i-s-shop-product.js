import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  productCode: DS.attr('number', { defaultValue: 1 }),
  name: DS.attr('string'),
  measure: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('decimal'),
  weight: DS.attr('decimal')
});

export let ValidationRules = {
  productCode: {
    descriptionKey: 'models.i-i-s-shop-product.validations.productCode.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-shop-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.i-i-s-shop-product.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-shop-product.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-shop-product.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, gte: 0 }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-shop-product.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, gte: 0 }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-shop-product', {
    productCode: attr('Код товара', { index: 0 }),
    name: attr('Наименование', { index: 1 }),
    measure: attr('Единица измерения', { index: 2 }),
    description: attr('Описание', { index: 3 }),
    price: attr('Цена за ед.', { index: 4 }),
    weight: attr('Вес в кг', { index: 5 })
  });

  modelClass.defineProjection('ProductL', 'i-i-s-shop-product', {
    productCode: attr('Код товара', { index: 0 }),
    name: attr('Наименование', { index: 1 }),
    measure: attr('Единица измерения', { index: 2 }),
    description: attr('Описание', { index: 3 }),
    price: attr('Цена за ед.', { index: 4 }),
    weight: attr('Вес в кг', { index: 5 })
  });
};
