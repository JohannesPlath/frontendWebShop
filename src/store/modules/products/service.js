import {mock} from './mock'

export const productService = {
  getProducts(cb) {
    //this.$axios.get("http://adasdasdasd");
    setTimeout(() => cb(mock), 100)
  },

  buyProducts(products, cb, errorCb) {

  }
}
