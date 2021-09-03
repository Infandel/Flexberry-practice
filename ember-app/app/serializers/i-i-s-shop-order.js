import { Serializer as OrderSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-order';
import DocumentSerializer from './i-i-s-shop-document';

export default DocumentSerializer.extend(OrderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
