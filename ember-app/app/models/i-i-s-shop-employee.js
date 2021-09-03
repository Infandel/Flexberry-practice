import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as EmployeeMixin
} from '../mixins/regenerated/models/i-i-s-shop-employee';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, EmployeeMixin, Validations, {
  nameWInitials: computed('lastName', 'firstName', 'middleName', function() {
    let lastName = this.get('lastName');

    let firstName = this.get('firstName');
    let firstNameInitial = firstName.substr(0, 1).toUpperCase();

    let middleName = this.get('middleName');
    let middleNameInitial = middleName.substr(0, 1).toUpperCase();

    return `${lastName} ${firstNameInitial}.${middleNameInitial}.`;
  }),

  fullName: computed(function() {
    let lastName = this.get('lastName');
    let firstName = this.get('firstName');
    let middleName = this.get('middleName');

    return `${lastName} ${firstName} ${middleName}`;
  }),
});

defineProjections(Model);

export default Model;
