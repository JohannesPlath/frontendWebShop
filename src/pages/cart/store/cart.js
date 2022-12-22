
const state = {
  items: [],
  quantity: 0,
  checkoutStatus: null,
  cartTotalPrice: 0,

}

// getters
const getters = {
  cartProducts: (state) => {
    return state.items
  },

  quantity:(state) => {
    return state.quantity
  },

  getCartTotalPrice:(state) => {
    return state.cartTotalPrice;
  },
  /*cartTotalPrice: (state) => {
     let result;
      for (let x = 0; x < state.items.length; x++) {
        this.result += Interger.valueOf(state.items.at(x).price)
        console.log("result ", this.result);
        console.log("state.items.at(x).price ", state.items.at(x).price)
      }
  }*/
}


const actions = {
  reduceProductFromCart({state, commit}, product){
    //console.log("@ cart reduceOne: ", product)
    commit('reduceProductFromCart', product)
  },

  addProductToCart({state, commit}, product) {
    //console.log("@ cart : ", product)
    commit('pushProductToCart', product)
  },

  getCountOfCart({state, commit}){
    commit('getCountOfCartMutation', count)
    return state.quantity;
  }
}

// mutations
const mutations = {
  getCountOfCartMutation(state, count){
    return state.quantity;
  },

  pushProductToCart(state, product) {
    state.items.push(
      product,
    ),
    state.cartTotalPrice = state.cartTotalPrice + product.price;
    state.quantity++;
  },
  reduceProductFromCart(state, deleteProduct) {
    state.items.splice(state.items.indexOf(deleteProduct),1)
    state.quantity--;
    state.cartTotalPrice -=  deleteProduct.price;
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
