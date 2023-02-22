import {ProductModel} from "@/pages/shop/store/models/product-model";
import {cartService} from "@/pages/cart/store/cart.service";
import {CartOfUserDTO} from "@/pages/cart/store/DTO/cartOfUserDTO";

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

  quantity: (state) => {
    return state.quantity
  },

  getCartTotalPrice: (state) => {
    return state.cartTotalPrice;
  },

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
      console.log('actions  for-loop p: ', p)
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
  },

  async finalize(state, {credentials, payment}) {
    console.log('actions finalizeOrder: ', state, "\n", credentials.userID, "\n", payment)
    let resp = await cartService.finalizeOrder(credentials, payment)
    //commit('finalizeOrder', state, credentials, payment)
  }
}

// mutations
const mutations = {

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
    console.log('mutations addToLocalCart: ', state)
    console.log('mutations addToLocalCart: cartpr ', cartProduct)
    state.quantity = state.quantity + cartProduct.count;
    state.cartTotalPrice = state.cartTotalPrice + (cartProduct.count * cartProduct.price);
    state.items.push(cartProduct);
  },

  finalizeOrder(state, credentials, payment) {
    cartService.pushToCartBackend(state.items, credentials, payment)
  },


  /* pushProductToCart(state, product, userId) {

     //todo löschen wenn backend aktiv
     let existItem = state.items.find(item => item.uuid === product.uuid);
     if (existItem) {
       existItem.amount++;
     } else {
       state.items.push({
         product: product,
         amount: 1,
       })
     }
     state.quantity++;
     state.cartTotalPrice = state.cartTotalPrice + product.price;
   },
 */

  /*reduceProductFromCart(state, deleteProduct) {
    let existItem = state.items.find(item => item.uuid === deleteProduct.uuid);
    console.log('mutations reduceProductFromCart: ', existItem)
    existItem.amount--;
    if (existItem.amount === 0) {
      state.items.splice(state.items.indexOf(existItem), 1)
    }
    console.log('mutations reduceProductFromCart: state.items', state.items)
    state.quantity--;
    state.cartTotalPrice -= deleteProduct.price;
    console.log("state.items: ", state.items)

  },*/

  /*incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems(state, {items}) {
    state.items = items
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }*/
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
