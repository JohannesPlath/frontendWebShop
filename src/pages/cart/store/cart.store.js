import {ProductModel} from "@/pages/shop/store/models/product-model";
import {cartService} from "@/pages/cart/store/cart.service";
import {CartOfUserDTO} from "@/pages/cart/store/DTO/cartOfUserDTO";

const state = {
  items: [],
  quantity: 0,
  checkoutStatus: null,
  cartTotalPrice: 0,
  isFinalized: false,
  finalizeText: null,
}

// getters
const getters = {
  cartProducts: (state) => {
    return state.items
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
    //console.log('actions fetchCartOfUser: rootstate..id ', id)
    const res = await cartService.getCartOfUser(id);
    const cartOfUserDTO = new CartOfUserDTO(res.userID, res.sumOfProducts, res.sumOfPrice, res.productList)
    /*console.log('actions : ', cartOfUserDTO)
    console.log('actions res.productList: ', cartOfUserDTO.productList)*/
    commit('clearState', state)
    for (const p of cartOfUserDTO.productList) {
      //  console.log('actions  for-loop p: ', p)
      const cartProduct = new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl)
      commit('addToLocalCart', cartProduct)
    }
    /* console.log('actions state.quantity = res.sumOfProducts: ', state.quantity, res.sumOfProducts)
     //state.quantity = res.sumOfProducts;
     console.log('actions state.cartTotalPrice = res.sumOfPrice;: ', state.cartTotalPrice, res.sumOfPrice)
     //state.cartTotalPrice = res.sumOfPrice;
     console.log('actions @ fetchCart Of User state.items : ', state.items)
 */
    commit('setCartTotalPrice', cartOfUserDTO.sumOfPrice)
    commit('setQuantity', cartOfUserDTO.sumOfProducts)
  },

  async reduceProductFromCart({state, commit, rootState, dispatch}, product) {
    let userId = rootState.account.credential.userID
    console.log("@ cart reduceOne: ", product, userId)
    await cartService.reduceProduct(userId, product, -1)
    dispatch('fetchCartOfUser', {state, commit, rootState});
  },

  async addProductToCart({state, commit, rootState, dispatch}, product) {
    let userId = rootState.account.credential.userID
    console.log("@ cart : ", userId)
    console.log("@ cart addproduct: ", product)
    await cartService.addProduct(userId, product, 1)
    dispatch('fetchCartOfUser', {state, commit, rootState});
    commit('setIsFinalized', state)
  },


  async finalize({state, commit, rootState, dispatch}, payload) {
    console.log('actions finalizeOrder: ', payload.credentials.userID, " --> ", payload.payment)// "\n", credentials.userID, "\n", payment)
    let resp = await cartService.finalizeOrder(payload.credentials.userID, payload.payment);
    console.log('actions finalize respose ----->> : ', resp.data)
    if (resp.data.hasBeenFinalized) {
      console.log('actions finalize: if clause + ', resp.data.hasBeenFinalized)
      commit("clearState", state) // todo hier weiter, warum commit mmnicht geht
      dispatch('fetchCartOfUser', {state, commit, rootState})

    }
    console.log('actions finalize "state": ', state)
    commit('mutateFinalizeOrder', resp.data)
  },

  setIsFinalisedFalseAtCartStore({state, commit, rootState, dispatch}) {
    commit('setIsFinalisedFalseAtCartStore')
  }
}

// mutations
const mutations = {

  /*isFinalized(state) {
    state.isFinalized = false;
  },*/
  setIsFinalisedFalseAtCartStore(state) {
    console.log('mutations setIsFinalisedFalseAtCartStore: ', "-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>")
    state.isFinalized = false
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
    state.isFinalized = respData.hasBeenFinalized
    console.log('mutations mutateFinalizeOrder:  respData', respData)
    console.log('mutations mutateFinalizeOrder: ', "------------------------>>>>>>>>>>>>>>>>>>>>>>>", respData.hasBeenFinalized)
    state.finalizeText = respData.message
    console.log('mutations mutateFinalizeOrder: ', state.finalizeText)
    console.log('mutations mutateFinalizeOrder: -------->>>>>>>  state.isFinalized ', state.isFinalized)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
