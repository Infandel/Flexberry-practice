import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import OrderStatusEnum from '../enums/i-i-s-shop-order-status';
import { computed } from '@ember/object';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as OrderMixin
} from '../mixins/regenerated/models/i-i-s-shop-order';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
  disabled: computed('model.isBlocked', function() {
    return this.get('model.isBlocked');
  })
});

let Model = DocumentModel.extend(OrderMixin, Validations, {
  isBlocked: computed('status', function() {
    const status = this.get('status');
    const dirtyAttributes = this.get('hasDirtyAttributes');
    switch (status) {
      case OrderStatusEnum.Canceled:
        return status === OrderStatusEnum.Canceled && !dirtyAttributes
      case OrderStatusEnum.Paid:
        return status === OrderStatusEnum.Paid && !dirtyAttributes
      default:
        return false
    }
  })
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
