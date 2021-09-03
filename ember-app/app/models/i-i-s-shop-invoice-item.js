import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

import {
  defineProjections,
  ValidationRules,
  Model as InvoiceItemMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, InvoiceItemMixin, Validations, {
  /*
   * Вес заказа
   */
  _totalWeightChanged: on('init', observer('weight', function() {
    once(this, '_totalWeightCompute');
  })),
  _totalWeightCompute: function() {
    let invoice = this.get('invoice')
    let items = invoice.get('invoiceItem');

    let newWeight = 0;
    if (invoice) {
      items.forEach(function (item) {
        newWeight += Number(item.get('weight'));
      });
    } 
    if (!this.get('isDeleted')) {
      invoice.set('totalWeight', newWeight.toFixed(2));
    }
  },
  
});

defineProjections(Model);

export default Model;
