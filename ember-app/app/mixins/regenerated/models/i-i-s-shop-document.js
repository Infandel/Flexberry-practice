import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number', { defaultValue: 1 }),
  createDate: DS.attr('date', { defaultValue() { return new Date(); } })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-shop-document.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  createDate: {
    descriptionKey: 'models.i-i-s-shop-document.validations.createDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DocumentE', 'i-i-s-shop-document', {
    number: attr('Number', { index: 0 }),
    createDate: attr('Create date', { index: 1 })
  });

  modelClass.defineProjection('DocumentL', 'i-i-s-shop-document', {
    number: attr('Number', { index: 0 }),
    createDate: attr('Create date', { index: 1 })
  });
};
