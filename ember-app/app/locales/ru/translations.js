import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Магазин',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Магазин',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Магазин',
          title: 'Shop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        магазин: {
          caption: 'Магазин',
          title: 'Магазин',
          'информация-о-заказах': {
            caption: 'Информация о заказах',
            title: 'Информация о заказах',
            'i-i-s-shop-order-l': {
              caption: 'Заказы',
              title: ''
            },
            'i-i-s-shop-invoice-l': {
              caption: 'Накладные',
              title: ''
            }
          },
          'товары-на-складе': {
            caption: 'Товары на складе',
            title: 'Товары на складе',
            'i-i-s-shop-storehouse-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-shop-product-l': {
              caption: 'Товары',
              title: ''
            }
          }
        },
        'данные-о-сотрудниках': {
          caption: 'Данные о сотрудниках',
          title: 'Данные о сотрудниках',
          'i-i-s-shop-employee-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
