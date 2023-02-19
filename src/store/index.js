import {createStore, createLogger} from 'vuex'
import cart from '../pages/cart/store/cart.store'
import products from '../pages/shop/store/products/product.store'
import account from '../pages/account/store/account.store'
import paymentStore from "@/pages/cart/store/payment.store";

const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  /*state: {},
  mutations: {},
  actions: {},*/
  modules: {
    account,
    products,
    cart,
    payment: paymentStore,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
