import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-shop-document-l');
  this.route('i-i-s-shop-document-e',
  { path: 'i-i-s-shop-document-e/:id' });
  this.route('i-i-s-shop-document-e.new',
  { path: 'i-i-s-shop-document-e/new' });
  this.route('i-i-s-shop-employee-l');
  this.route('i-i-s-shop-employee-e',
  { path: 'i-i-s-shop-employee-e/:id' });
  this.route('i-i-s-shop-employee-e.new',
  { path: 'i-i-s-shop-employee-e/new' });
  this.route('i-i-s-shop-invoice-l');
  this.route('i-i-s-shop-invoice-e',
  { path: 'i-i-s-shop-invoice-e/:id' });
  this.route('i-i-s-shop-invoice-e.new',
  { path: 'i-i-s-shop-invoice-e/new' });
  this.route('i-i-s-shop-order-l');
  this.route('i-i-s-shop-order-e',
  { path: 'i-i-s-shop-order-e/:id' });
  this.route('i-i-s-shop-order-e.new',
  { path: 'i-i-s-shop-order-e/new' });
  this.route('i-i-s-shop-product-l');
  this.route('i-i-s-shop-product-e',
  { path: 'i-i-s-shop-product-e/:id' });
  this.route('i-i-s-shop-product-e.new',
  { path: 'i-i-s-shop-product-e/new' });
  this.route('i-i-s-shop-storehouse-l');
  this.route('i-i-s-shop-storehouse-e',
  { path: 'i-i-s-shop-storehouse-e/:id' });
  this.route('i-i-s-shop-storehouse-e.new',
  { path: 'i-i-s-shop-storehouse-e/new' });
});

export default Router;
