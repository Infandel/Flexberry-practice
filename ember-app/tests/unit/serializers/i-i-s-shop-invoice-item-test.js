import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-invoice-item', 'Unit | Serializer | i-i-s-shop-invoice-item', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-shop-invoice-item',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-shop-invoice-status',
    'transform:i-i-s-shop-order-status',
    'transform:i-i-s-shop-position-list',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
