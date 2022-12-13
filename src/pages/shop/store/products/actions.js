import {productService} from './service'
import {ProductModel} from "@/pages/shop/store/models/product-model";


const fetchAllProducts = ({commit}) => {
  productService.getProducts(res => {
    const products = []
    for (const p of res) {
      products.push(new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl))
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
