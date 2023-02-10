import {ProductModel} from "@/pages/shop/store/models/product-model";
import {cartService} from "@/pages/cart/store/cart.service";

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

  async fetchCartOfUser({state, commit, rootState}) {
    let id = rootState.account.credential.userID;
    console.log('actions fetchCartOfUser: rootstate..id ', id)
    const res = await cartService.getCartOfUser(id);
    console.log('actions : ', res)
    console.log('actions res.productList: ', res.productList)
    for (const p of res.productList) {
      console.log('actions  for-loop p: ', p)
      const cartProduct = new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl)
      commit('addToLocalCart', cartProduct)
    }
    console.log('actions state.quantity = res.sumOfProducts: ', state.quantity, res.sumOfProducts)
    //state.quantity = res.sumOfProducts;
    console.log('actions state.cartTotalPrice = res.sumOfPrice;: ', state.cartTotalPrice, res.sumOfPrice)
    //state.cartTotalPrice = res.sumOfPrice;
    console.log('actions @ fetchCart Of User state.items : ', state.items)

    /*const cart = []
     for (const p of res) {
       cart.push({
         product: new ProductModel(p.id, p.title, p.currency, p.category, p.count, p.price, p.description, p.picUrl),
         quantity: 0
       })
     }*/
    //todo objekt übergeben

  },

  reduceProductFromCart({state, commit, rootState}, product) {
    let userId = rootState.account.credential.userID
    console.log("@ cart reduceOne: ", product, userId)
    cartService.reduceProduct(userId, product, -1)
    commit('reduceProductFromCart', product)
  },

  addProductToCart({state, commit, rootState}, product) {
    let userId = rootState.account.credential.userID
    console.log("@ cart : ", userId)
    cartService.addProduct(userId, product, 1)
    commit('pushProductToCart', product, userId)
  },

  /* getCountOfCart({state, commit}){
     commit('getCountOfCartMutation', count)
     return state.quantity;
   }*/

  finalize(state, products, credentials, payment) {
    console.log('actions finalizeOrder: ', state.items, credentials, payment)
    commit('finalizeOrder', state, credentials, payment)
  }
}

// mutations
const mutations = {


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

  pushProductToCart(state, product, userId) {

    //todo löschen wenn backend aktiv
    let existItem = state.items.find(item => item.product.uuid === product.uuid);
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


  reduceProductFromCart(state, deleteProduct) {
    let existItem = state.items.find(item => item.product.uuid === deleteProduct.uuid);
    console.log('mutations reduceProductFromCart: ', existItem)
    existItem.amount--;
    if (existItem.amount === 0) {
      state.items.splice(state.items.indexOf(existItem), 1)
    }
    console.log('mutations reduceProductFromCart: state.items', state.items)
    state.quantity--;
    state.cartTotalPrice -= deleteProduct.price;
    console.log("state.items: ", state.items)

  },

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
