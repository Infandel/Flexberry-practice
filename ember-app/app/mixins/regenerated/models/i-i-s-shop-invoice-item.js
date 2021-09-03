import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  weight: DS.attr('decimal'),
  price: DS.attr('decimal'),
  totalSum: DS.attr('decimal'),
  product: DS.belongsTo('i-i-s-shop-product', { inverse: null, async: false }),
  invoice: DS.belongsTo('i-i-s-shop-invoice', { inverse: 'invoiceItem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoice: {
    descriptionKey: 'models.i-i-s-shop-invoice-item.validations.invoice.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceItemE', 'i-i-s-shop-invoice-item', {
    product: belongsTo('i-i-s-shop-product', 'Товар', {
      name: attr('~', { index: 1, hidden: true }),
      productCode: attr('~', { index: 2, hidden: true }),
      weight: attr('~', { index: 8, hidden: true })
    }, { index: 0, displayMemberPath: 'name' }),
    amount: attr('Количество', { index: 4 }),
    weight: attr('Вес (кг)', { index: 5 }),
    price: attr('Цена', { index: 6 }),
    totalSum: attr('Сумма по позиции', { index: 7 })
  });
};
