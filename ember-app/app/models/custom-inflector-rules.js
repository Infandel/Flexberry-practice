import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('storehouse', 'Storehouses');
inflector.irregular('document', 'Documents');
inflector.irregular('employee', 'Employees');
inflector.irregular('invoice', 'Invoices');
inflector.irregular('product', 'Products');
inflector.irregular('order', 'Orders');
inflector.irregular('item', 'Items');

export default {};
