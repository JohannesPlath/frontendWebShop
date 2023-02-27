import {ProductModel} from "@/pages/shop/store/models/product-model";
import {cartService} from "@/pages/cart/store/cart.service";
import {CartOfUserDTO} from "@/pages/cart/store/DTO/cartOfUserDTO";

const state = {
  items: [],
  quantity: 0,
  checkoutStatus: null,
  cartTotalPrice: 0,
  hasNewMessage: false,
  finalizeText: "testText",
  isFinalized: false
}

// getters
const getters = {
  cartProducts: (state) => {
    return state.items
  },

  hasNewMessage: (state) => {
    return state.hasNewMessage
  },

  isFinalized: (state) => {
    return state.isFinalized
  },

  quantity: (state) => {
    return state.quantity
  },

  getCartTotalPrice: (state) => {
    return state.cartTotalPrice;
  },

  finalizeText: (state) => {
    return state.finalizeText;
  }
}


const actions = {

  async fetchCartOfUser({state, commit, rootState}) {
    let id = rootState.account.credential.userID;
    const res = await cartService.getCartOfUser(id);
    const cartOfUserDTO = new CartOfUserDTO(res.userID, res.sumOfProducts, res.sumOfPrice, res.productList)
    commit('clearState', state)
    let totalPrice = 0
    let totalQauntity = 0
    for (const p of cartOfUserDTO.productList) {
      const cartProduct = new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl)
      totalPrice += (p.price * p.count) // todo absprechen ob werte für menge und summe aus dto kommen oder berechnet werden
      totalQauntity += p.count
      commit('addToLocalCart', cartProduct)
    }
    commit('setCartTotalPrice', totalPrice)
    commit('setQuantity', totalQauntity)
  },

  async reduceProductFromCart({state, commit, rootState, dispatch}, product) {
    let userId = rootState.account.credential.userID
    await cartService.reduceProduct(userId, product, -1)
    dispatch('fetchCartOfUser', {state, commit, rootState});
  },

  async addProductToCart({state, commit, rootState, dispatch}, product) {
    let userId = rootState.account.credential.userID
    await cartService.addProduct(userId, product, 1)
    dispatch('fetchCartOfUser', {state, commit, rootState});

  },

  async finalize({state, commit, rootState, dispatch}, payload) {
    console.log('actions finalizeOrder: ', payload.credentials.userID, " --> ", payload.payment)
    let resp = await cartService.finalizeOrder(payload.credentials.userID, payload.payment);
    commit('newMessage', state)
    console.log('actions finalize respose ----->> : ', resp.data)
    if (resp.data.hasBeenFinalized) {
      console.log('actions finalize: if clause + ', resp.data.hasBeenFinalized)
      commit("clearState", state)
      dispatch('fetchCartOfUser', {state, commit, rootState})
      commit('mutateFinalizeOrder', resp.data)
    } else {
      commit('mutateFinalizeOrder', resp.data)
    }
  },

  setIsFinalisedFalseAtCartStore({state, commit, rootState, dispatch}) {
    commit('setIsFinalisedFalseAtCartStore')
  }
}

// mutations
const mutations = {

  /* isFinalized(state) {
     state.hasNewMessage = false;
   },*/
  setIsFinalisedFalseAtCartStore(state) {
    state.hasNewMessage = false
  },

  newMessage(state) {
    state.hasNewMessage = true;
  },

  clearState(state) {
    state.items = [];
    state.cartTotalPrice = 0;
    state.quantity = 0;
  },

  setCartTotalPrice(state, cartTotalPrice) {
    state.cartTotalPrice = cartTotalPrice;
  },

  setQuantity(state, quantity) {
    state.quantity = quantity;
  },

  addToLocalCart(state, cartProduct) {
    state.quantity = state.quantity + cartProduct.count;
    state.cartTotalPrice = state.cartTotalPrice + (cartProduct.count * cartProduct.price);
    state.items.push(cartProduct);
  },

  mutateFinalizeOrder(state, respData) {
    state.hasNewMessage = true
    state.isFinalized = respData.hasBeenFinalized
    // console.log('mutations mutateFinalizeOrder:  respData', respData)
    // console.log('mutations mutateFinalizeOrder: ', "------------------------>>>>>>>>>>>>>>>>>>>>>>>", respData.hasBeenFinalized)
    state.finalizeText = respData.message
    // console.log('mutations mutateFinalizeOrder: ', state.finalizeText)
    // console.log('mutations mutateFinalizeOrder: -------->>>>>>>  state.isFinalized ', state.hasNewMessage)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
