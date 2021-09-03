import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'OrderE',
  modelName: 'i-i-s-shop-order',

  setupController(controller) {
    this._super(...arguments);
    controller.setProductLookupPredicate();
  }
});
