export default {
  projections: {
    StorehouseE: {
      number: {
        __caption__: 'number'
      },
      address: {
        __caption__: 'address'
      },
      storekeeper: {
        __caption__: 'storekeeper',
        lastName: {
          __caption__: 'lastName'
        },
        firstName: {
          __caption__: 'firstName'
        },
        middleName: {
          __caption__: 'middleName'
        }
      },
      storeProduct: {
        __caption__: 'storeProduct',
        product: {
          __caption__: 'product',
          name: {
            __caption__: 'name'
          },
          productCode: {
            __caption__: 'productCode'
          }
        },
        amount: {
          __caption__: 'amount'
        }
      }
    },
    StorehouseL: {
      number: {
        __caption__: 'number'
      },
      address: {
        __caption__: 'address'
      },
      storekeeper: {
        __caption__: 'storekeeper',
        lastName: {
          __caption__: 'lastName'
        }
      }
    }
  },
  validations: {
    number: {
      __caption__: 'number'
    },
    address: {
      __caption__: 'address'
    },
    storekeeper: {
      __caption__: 'storekeeper'
    },
    storeProduct: {
      __caption__: 'storeProduct'
    }
  }
};
