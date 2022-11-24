import {createStore, createLogger} from 'vuex'
// import cart from './modules/cart/cart'
import products from './modules/products'
import counterModule from './modules/counter/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  /*state: {},
  mutations: {},
  actions: {},*/
  modules: {
    counterModule,
    products,
    // cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
