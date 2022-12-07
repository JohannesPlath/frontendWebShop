import {createStore, createLogger} from 'vuex'
// import cart from './modules/cart/cart'
import products from './modules/products'
import accountModule from './modules/account/index'

const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  /*state: {},
  mutations: {},
  actions: {},*/
  modules: {
    accountModule,
    products,
    // cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
