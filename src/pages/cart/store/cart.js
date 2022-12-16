
const state = {
  items: [],
  quantity: 0,
  checkoutStatus: null

}

// getters
const getters = {
  cartProducts: (state) => {
    return state.items
  },



  quantity:(state) => {
    return state.quantity
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      //to implement
    }, 0)
  }
}


const actions = {
  reduceProductFromCart({state, commit}, product){
    console.log("@ cart reduceOne: ", product)
    commit('reduceProductFromCart', product)
  },

  addProductToCart({state, commit}, product) {
    console.log("@ cart : ", product)
    commit('pushProductToCart', product)
  },
}

// mutations
const mutations = {
  pushProductToCart(state, product) {
    state.items.push(
      product,
    ),
    state.quantity++;
  },
  reduceProductFromCart(state, deleteProduct) {
    state.items.splice(state.items.indexOf(deleteProduct),1)
    console.log("delteP ", deleteProduct)
      console.log("state.items  ", state.items.indexOf(deleteProduct) )
    state.quantity--;
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
