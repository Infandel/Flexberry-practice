import { Serializer as DocumentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-document';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DocumentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
