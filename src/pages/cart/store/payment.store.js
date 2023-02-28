import {cartService} from "@/pages/cart/store/cart.service";
import {ifStatement} from "@babel/types";

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
    async setPayment(context, payload) {
      let hasSetPayment = await cartService.setPayment(payload)
      if (hasSetPayment) context.commit('setPayment', payload.payment)
    }
  }
}

export default paymentStore
