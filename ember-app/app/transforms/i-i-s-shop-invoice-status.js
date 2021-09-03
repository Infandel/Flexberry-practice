import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import InvoiceStatusEnum from '../enums/i-i-s-shop-invoice-status';

export default FlexberryEnum.extend({
  enum: InvoiceStatusEnum,
  sourceType: 'IIS.Shop.InvoiceStatus'
});
