import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';
import generateUniqueId from 'ember-flexberry-data/utils/generate-unique-id';
import Builder from 'ember-flexberry-data/query/builder';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(InvoiceMixin, Validations, {
   

  /*
   * Сумма заказа
   */
  _totalSumChanged: on('init', observer('order', function() {
    once(this, '_totalSumCompute');
  })),
  _totalSumCompute: function() {
    let order = this.get('order');
    let result = 0;
    if (order) {
      result = order.get('totalSum')
    }

    if (!this.get('isDeleted')) { // проверяем, что текущая модель не была удалена
      this.set('totalSum', result);
    }
  },
  
 

  /*
   * Список товаров к выдаче
   */
  _invoiceItemChanged: on('init', observer('order', function() {
    once(this, '_invoiceItemCompute');
  })),
  _invoiceItemCompute: function() {
    var me = this;

    if (!this.get('isDeleted')) {
      // Удаляем старые детейлы
      let currentItems = me.get('invoiceItem');
      currentItems.forEach(function (item) {
        item.deleteRecord();
      });

      let order = me.get('order');
      if (order) {
        let store = this.get('store');
        let orderId = order.get('id');

        let builder = new Builder(store, 'i-i-s-shop-order');
        builder.selectByProjection('OrderE');
        builder.byId(orderId);

        store.query('i-i-s-shop-order', builder.build())
          .then(function (orders) {
            orders.forEach(function(order) {
              let items = order.get('orderItem');
              items.forEach(function(item) {
                let product = item.get('product');
                let amount = Number(item.get('amount'));

                let weight = Number(product.get('weight'));
                let totalWeight = Number((weight * amount).toFixed(3));

                // Создаем новый детейл
                let invoiceItem = store.createRecord('i-i-s-shop-invoice-item', {
                  id: generateUniqueId(),
                  amount: amount,
                  weight: totalWeight,
                  price: item.get('priceWTaxes'),
                  totalSum: item.get('totalSum'),
                  product: product
                });

                // Добавляем детейл в список
                me.get('invoiceItem').pushObject(invoiceItem);
              });
            });
          });
      } else {
        this.set('totalWeight', 0);
      }
    }
  },  

  /*
   * Дата и время отгрузки
   */
  _shipmentDateTimeChanged: on('init', observer('shipmentDateTime', function() {
    once(this, '_shipmentDateTimeCompute');
  })),
  _shipmentDateTimeCompute: function() {
    let order = this.get('order');
    let shipmentDateTime = this.get('shipmentDateTime')
    if (order) {
      if (!this.get('isDeleted')) {
        order.set('shipmentDate', shipmentDateTime);
      }
    }    
  },
  
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
