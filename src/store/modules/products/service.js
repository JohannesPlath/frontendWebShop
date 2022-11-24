import {mock} from './mock'

export const productService = {
  getProducts(cb) {
    setTimeout(() => cb(mock), 100)
  },

  buyProducts(products, cb, errorCb) {

  }
}
