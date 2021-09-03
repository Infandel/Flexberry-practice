import EditFormController from 'ember-flexberry/controllers/edit-form';
import { generateNotOrPredicateByList } from '../utils/generate-predicate-by-list';
import { inject } from '@ember/service';
import Builder from 'ember-flexberry-data/query/builder';

export default EditFormController.extend({
  parentRoute: 'i-i-s-shop-invoice-l',

  /**
  Сервис для событий лукапа
    @property lookupEventsService
    @type Service
  */
  lookupEventsService: inject('lookup-events'),

  init() {
    this._super(...arguments);
    
    this.setOrderLookupPredicate()

    // Событие закрытия окна лукапа
    this.get('lookupEventsService').on('lookupDialogOnHidden', this, this._setLookupPredicate);

  },

  willDestroy() {
    this._super(...arguments);
    this.get('lookupEventsService').off('lookupDialogOnHidden', this, this._setLookupPredicate);
  },

  /**
  * Обновление лукапов
  */
  _setLookupPredicate(componentName) {
    switch (componentName) {
      case 'orderLookup':
        this.setOrderLookupPredicate();
        break;
    }
  },

  /**
  * Обновление предиката для лукапа заказов
  */
  setOrderLookupPredicate() {
    let store = this.get('store');
    let builder = new Builder(store, 'i-i-s-shop-invoice');
    builder.selectByProjection('InvoiceE');
    let alreadyInUseOrderIds = [];
    // Присваиваем значение this к переменной self, так как this не доступна внутри промиса.
    let self = this

    store.query('i-i-s-shop-invoice', builder.build())
      .then(function (invoices) {
        invoices.forEach(function(invoice) {
          let order = invoice.get('order');
          let orderId = order.get('id');
          if (orderId) {            
            // Добавляем IP существующих заказов в список для предиката 
            alreadyInUseOrderIds.push(orderId);
          }
        });
        let predicate = generateNotOrPredicateByList('id', 'eq', alreadyInUseOrderIds);
        self.set('orderLimitPredicate', predicate);
      })
  },

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);

    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-shop-invoice-item+product':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'nameWCode',
            required: false,
            relationName: 'product',
            projection: 'ProductL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
