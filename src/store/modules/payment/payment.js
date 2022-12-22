const payment = {
  namespaced: true,
  state() {
    return {
      payment: {
        name: "PaypalForExample",
        id: "",

      }
    }
  },
  getters: {
    getPayment(state) {
      return state.payment
    }
  },
  mutations: {
    setPayment(state, payload) {
      state.payment = payload
    }
  },
  actions: {
    setPayment(context, payload) {
      console.log("payload ", payload)
      context.commit('setPayment', payload)
    }
  }
}

export default payment
