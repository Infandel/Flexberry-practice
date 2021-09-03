import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import OrderStatusEnum from '../../../enums/i-i-s-shop-order-status';
import { computed } from '@ember/object';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-order-status', { defaultValue: OrderStatusEnum.New }),
  shipmentDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  manager: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  orderItem: DS.hasMany('i-i-s-shop-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-shop-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  paymentDate: {
  descriptionKey: 'models.i-i-s-shop-order.validations.paymentDate.__caption__',
  validators: [
    validator('ds-error'),
    validator('date'),
    validator('presence', { 
      presence: true,
      disabled: computed('model.status', function() {
        return this.get('model.status') !== OrderStatusEnum.Paid;
      })
    }),
  ],
},
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { 
        allowString: true, 
        allowBlank: true,
      }),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-shop-order.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', { 
        presence: true,
      }),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-shop-order.validations.orderItem.__caption__',
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
  modelClass.defineProjection('OrderE', 'i-i-s-shop-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформление', { index: 2 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {
      lastName: attr('~', { index: 14, hidden: true }),
      firstName: attr('~', { index: 15, hidden: true }),
      middleName: attr('~', { index: 6, hidden: true })
    }, { index: 3, displayMemberPath: 'lastName' }),
    totalSum: attr('Сумма заказа', { index: 7 }),
    paymentDate: attr('Дата оплата', { index: 8 }),
    shipmentDate: attr('Дата отгрузки', { index: 9 }),
    orderItem: hasMany('i-i-s-shop-order-item', 'Содержимое заказа', {
      product: belongsTo('i-i-s-shop-product', 'Товар', {
        name: attr('~', { index: 13, hidden: true }),
        productCode: attr('~', { index: 12, hidden: true }),
        price: attr('~', { index: 11, hidden: true }),
        weight: attr('~', { index: 10, hidden: true })
      }, { index: 0, displayMemberPath: 'name' }),
      amount: attr('Количество', { index: 3 }),
      priceWTaxes: attr('Цена с налогом', { index: 4 }),
      totalSum: attr('Сумма по позиции', { index: 5 })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-shop-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {
      lastName: attr('Менеджер', { index: 3 })
    }, { index: -1, hidden: true }),
    totalSum: attr('Стоимость заказа', { index: 4 }),
    paymentDate: attr('Дата оплаты', { index: 5 }),
    shipmentDate: attr('Дата отгрузки', { index: 6 })
  });
};
