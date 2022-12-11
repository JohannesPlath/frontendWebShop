import {createStore, createLogger} from 'vuex'
import cart from '../pages/cart/store/cart'
import products from '../pages/shop/store/products'
import account from './modules/account/index'

const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  /*state: {},
  mutations: {},
  actions: {},*/
  modules: {
    account,
    products,
    cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
