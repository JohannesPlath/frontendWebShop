import {productService} from './service'
import {Product} from '@/store/modules/products/model'

const getAllProducts = ({commit}) => {
  productService.getProducts(res => {
    const products = []
    for (const p of res) {
      products.push(new Product(p.id, p.title, p.price, p.inventory))
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
  getAllProducts,
  buyProducts
}

export default actions
