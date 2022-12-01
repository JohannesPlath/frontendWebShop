import {productService} from './service'
import {ProductModel} from '@/store/modules/products/model'

const fetchAllProducts = ({commit}) => {
  productService.getProducts(res => {
    const products = []
    for (const p of res) {
      products.push(new ProductModel(p.id, p.title, p.price, p.inventory))
    }
    commit('setProducts', products)
  })
}

const buyProducts = ({commit}, payload) => {
  productService.buyProducts(payload, message => {
    commit('receiveMessage', message)
  })
}

const actions = {
  fetchAllProducts,
  buyProducts
}

export default actions
