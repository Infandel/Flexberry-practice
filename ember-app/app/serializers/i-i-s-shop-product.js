import { Serializer as ProductSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-product';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProductSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
