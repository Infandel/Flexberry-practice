import { Serializer as StoreProductSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-store-product';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(StoreProductSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
