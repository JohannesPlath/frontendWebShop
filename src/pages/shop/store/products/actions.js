import {service} from './product.service'
import {ProductModel} from "@/pages/shop/store/models/product-model";


const fetchAllProducts = ({commit}) => {
  service.getProducts(res => {
    const products = []
    for (const p of res) {
      products.push({
        product: new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl),
        quantity: 0
      })
    }
    commit('setProducts', products)
  })
}

const buyProducts = ({commit}, payload) => {
  service.buyProducts(payload, message => {
    commit('receiveMessage', message)
  })
}

const actions = {
  fetchAllProducts,
  buyProducts
}

export default actions
