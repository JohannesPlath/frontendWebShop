
const state = {
  items: [],
  checkoutStatus: null

}

// getters
const getters = {
  cartProducts: (state) => {
    return state.items
  },



  quantity:(state) => {
    return state.items.length
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}


const actions = {

  addProductToCart({state, commit}, product) {

    console.log("@ cart : ", product)
    commit('pushProductToCart', product)

  }
}

// mutations
const mutations = {
  pushProductToCart(state, product) {
    state.items.push({
      product,
      quantity: 1
    })
  },

  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems(state, {items}) {
    state.items = items
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
