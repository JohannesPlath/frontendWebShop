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
      console.log("@ payment.store @ setPayment payload ", payload)
      console.log("@ payment.store @ setPayment context: ", context)
      console.log("@ payment.store @ setPayment userId: ", payload.uuid)
      console.log("@ payment.store @ setPayment payload: ", payload.payment)
      let hasSetPayment = await cartService.setPayment(payload)
      if (hasSetPayment) context.commit('setPayment', payload.payment)
    }
  }
}

export default paymentStore
