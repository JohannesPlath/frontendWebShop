import {createStore, createLogger} from 'vuex'
import cart from '../pages/cart/store/cart'
import products from '../pages/shop/store/products'
import account from '../pages/account/store'
import payment from "@/store/modules/payment/payment";

const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  /*state: {},
  mutations: {},
  actions: {},*/
  modules: {
    account,
    products,
    cart,
    payment,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
