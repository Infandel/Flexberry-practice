export default {
  projections: {
    InvoiceItemE: {
      product: {
        __caption__: 'product',
        name: {
          __caption__: 'name'
        },
        productCode: {
          __caption__: 'productCode'
        },
        weight: {
          __caption__: 'weight'
        }
      },
      amount: {
        __caption__: 'amount'
      },
      weight: {
        __caption__: 'weight'
      },
      price: {
        __caption__: 'price'
      },
      totalSum: {
        __caption__: 'totalSum'
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'amount'
    },
    weight: {
      __caption__: 'weight'
    },
    price: {
      __caption__: 'price'
    },
    totalSum: {
      __caption__: 'totalSum'
    },
    product: {
      __caption__: 'product'
    },
    invoice: {
      __caption__: 'invoice'
    }
  }
};
