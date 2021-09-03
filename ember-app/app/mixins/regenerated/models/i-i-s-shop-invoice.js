import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import InvoiceStatusEnum from '../../../enums/i-i-s-shop-invoice-status';
import { computed } from '@ember/object';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  shipmentDateTime: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  totalWeight: DS.attr('decimal'),
  note: DS.attr('string'),
  customerName: DS.attr('string'),
  responsiblePerson: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  order: DS.belongsTo('i-i-s-shop-order', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-shop-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', { 
        presence: true,
        disabled: computed('model.status', function() {
          return this.get('model.status') !== InvoiceStatusEnum.Shipped;
        })
      }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerName: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  responsiblePerson: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.responsiblePerson.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.invoiceItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-shop-document'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceE', 'i-i-s-shop-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    order: belongsTo('i-i-s-shop-order', 'Заказ', {
      number: attr('~', { index: 4, hidden: true }),
      totalSum: attr('~', { index: 12, hidden: true }),
    }, { index: 3, displayMemberPath: 'number' }),
    customerName: attr('Получатель', { index: 5 }),
    totalSum: attr('Сумма заказа', { index: 6 }),
    totalWeight: attr('Вес заказа (кг)', { index: 7 }),
    note: attr('Примечание', { index: 8 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 9 }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {
      lastName: attr('~', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'lastName' }),
    invoiceItem: hasMany('i-i-s-shop-invoice-item', 'Список товаров к выдаче', {
      product: belongsTo('i-i-s-shop-product', 'Товар', {
        name: attr('~', { index: 1, hidden: true }),
        weight: attr('~', { index: 13, hidden: true })
      }, { index: 0, displayMemberPath: 'name' }),
      amount: attr('Количество', { index: 2 }),
      weight: attr('Вес (кг)', { index: 3 }),
      price: attr('Цена', { index: 4 }),
      totalSum: attr('Сумма по позиции', { index: 5 })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-shop-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления+', { index: 2 }),
    order: belongsTo('i-i-s-shop-order', 'Номер заказа', {
      number: attr('Номер заказа', { index: 3 }),
      totalSum: attr('~', { index: 10, hidden: true }),
    }, { index: -1, hidden: true }),
    customerName: attr('Получатель', { index: 4 }),
    totalSum: attr('Сумма заказа', { index: 5 }),
    totalWeight: attr('Вес заказа (кг)', { index: 6 }),
    note: attr('Примечание', { index: 7 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 8 }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {
      lastName: attr('Товар выдал', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
