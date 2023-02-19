import {cartService} from "@/pages/cart/store/cart.service";

const paymentStore = {
  namespaced: true,
  state() {
    return {
      payment: {
        name: "PaypalForExample",
      }
    }
  },
  getters: {
    getPayment(state) {
      return state.payment.name
    }
  },
  mutations: {
    setPayment(state, payload) {
      state.payment.name = payload
    }
  },
  actions: {
    async setPayment(userId, payload) {
      console.log("@ payment.store @ setPayment payload: ", payload)
      await cartService.setPayment(userId, payload)
      context.commit('setPayment', payload)
    }
  }
}

export default paymentStore
