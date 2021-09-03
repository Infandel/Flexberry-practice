import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:check-product-amount', 'Unit | Validator | check-product-amount', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
