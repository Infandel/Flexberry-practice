import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-invoice', 'Unit | Model | i-i-s-shop-invoice', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-shop-document',
    'model:i-i-s-shop-employee',
    'model:i-i-s-shop-invoice-item',
    'model:i-i-s-shop-invoice',
    'model:i-i-s-shop-order-item',
    'model:i-i-s-shop-order',
    'model:i-i-s-shop-product',
    'model:i-i-s-shop-store-product',
    'model:i-i-s-shop-storehouse',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
