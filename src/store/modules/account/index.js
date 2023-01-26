const account = {
  namespaced: true,
  state() {
    return {
      credential: {
        name: "John Do",
        address: "FancyStreet 32",
        city: "CloudVallay-Amsterdam",
        state: "Heaven",
        zip: "12345",
        country: "Netherlands",
        mail: "no registered mail",
        password: "",
      }
    }
  },
  getters: {
    getCredentials(state) {
      return state.credential
    }
  },
  mutations: {
    setCredentials(state, payload) {
      state.credential = payload
    }
  },
  actions: {
    setCredentials(context, payload) {
      console.log("payload ", payload)
      context.commit('setCredentials', payload)
    }
  }
}

export default account
