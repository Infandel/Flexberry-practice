import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISShopDocumentLForm from './forms/i-i-s-shop-document-l';
import IISShopEmployeeLForm from './forms/i-i-s-shop-employee-l';
import IISShopInvoiceLForm from './forms/i-i-s-shop-invoice-l';
import IISShopOrderLForm from './forms/i-i-s-shop-order-l';
import IISShopProductLForm from './forms/i-i-s-shop-product-l';
import IISShopStorehouseLForm from './forms/i-i-s-shop-storehouse-l';
import IISShopDocumentEForm from './forms/i-i-s-shop-document-e';
import IISShopEmployeeEForm from './forms/i-i-s-shop-employee-e';
import IISShopInvoiceEForm from './forms/i-i-s-shop-invoice-e';
import IISShopOrderEForm from './forms/i-i-s-shop-order-e';
import IISShopProductEForm from './forms/i-i-s-shop-product-e';
import IISShopStorehouseEForm from './forms/i-i-s-shop-storehouse-e';
import IISShopDocumentModel from './models/i-i-s-shop-document';
import IISShopEmployeeModel from './models/i-i-s-shop-employee';
import IISShopInvoiceItemModel from './models/i-i-s-shop-invoice-item';
import IISShopInvoiceModel from './models/i-i-s-shop-invoice';
import IISShopOrderItemModel from './models/i-i-s-shop-order-item';
import IISShopOrderModel from './models/i-i-s-shop-order';
import IISShopProductModel from './models/i-i-s-shop-product';
import IISShopStoreProductModel from './models/i-i-s-shop-store-product';
import IISShopStorehouseModel from './models/i-i-s-shop-storehouse';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-shop-document': IISShopDocumentModel,
    'i-i-s-shop-employee': IISShopEmployeeModel,
    'i-i-s-shop-invoice-item': IISShopInvoiceItemModel,
    'i-i-s-shop-invoice': IISShopInvoiceModel,
    'i-i-s-shop-order-item': IISShopOrderItemModel,
    'i-i-s-shop-order': IISShopOrderModel,
    'i-i-s-shop-product': IISShopProductModel,
    'i-i-s-shop-store-product': IISShopStoreProductModel,
    'i-i-s-shop-storehouse': IISShopStorehouseModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        магазин: {
          caption: 'магазин',
          title: 'магазин',
          'информация-о-заказах': {
            caption: 'информация-о-заказах',
            title: 'информация-о-заказах',
            'i-i-s-shop-order-l': {
              caption: 'i-i-s-shop-order-l',
              title: 'i-i-s-shop-order-l'
            },
            'i-i-s-shop-invoice-l': {
              caption: 'i-i-s-shop-invoice-l',
              title: 'i-i-s-shop-invoice-l'
            }
          },
          'товары-на-складе': {
            caption: 'товары-на-складе',
            title: 'товары-на-складе',
            'i-i-s-shop-storehouse-l': {
              caption: 'i-i-s-shop-storehouse-l',
              title: 'i-i-s-shop-storehouse-l'
            },
            'i-i-s-shop-product-l': {
              caption: 'i-i-s-shop-product-l',
              title: 'i-i-s-shop-product-l'
            }
          }
        },
        'данные-о-сотрудниках': {
          caption: 'данные-о-сотрудниках',
          title: 'данные-о-сотрудниках',
          'i-i-s-shop-employee-l': {
            caption: 'i-i-s-shop-employee-l',
            title: 'i-i-s-shop-employee-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-shop-document-l': IISShopDocumentLForm,
    'i-i-s-shop-employee-l': IISShopEmployeeLForm,
    'i-i-s-shop-invoice-l': IISShopInvoiceLForm,
    'i-i-s-shop-order-l': IISShopOrderLForm,
    'i-i-s-shop-product-l': IISShopProductLForm,
    'i-i-s-shop-storehouse-l': IISShopStorehouseLForm,
    'i-i-s-shop-document-e': IISShopDocumentEForm,
    'i-i-s-shop-employee-e': IISShopEmployeeEForm,
    'i-i-s-shop-invoice-e': IISShopInvoiceEForm,
    'i-i-s-shop-order-e': IISShopOrderEForm,
    'i-i-s-shop-product-e': IISShopProductEForm,
    'i-i-s-shop-storehouse-e': IISShopStorehouseEForm
  },

});

export default translations;
