import {service} from "@/pages/shop/store/products/product.service";

const state = {
  all: [],
  currentId: 0,
}

// getters
const getters = {
  getAll(state) {
    return state.all
  },
  getCurrentProduct(state) {
    return state.currentId
      ? state.products[state.currentId]
      : {}
  }
}


const actions = {
  fetchAllProducts({commit}) {
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
  },

  buyProducts({commit}, payload) {
    service.buyProducts(payload, message => {
      commit('receiveMessage', message)
    })
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },
}

import {ProductModel} from "@/pages/shop/store/models/product-model";

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
