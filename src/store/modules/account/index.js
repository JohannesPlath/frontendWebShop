const account = {
  namespaced: true,
  state() {
    return {
      credential:{
      name: "Unregistered User",
      address:"",
      city: "",
      state: "",
      zip: "",
      country: "",
      mail:"no registerd mail",
      password:"",
    }}
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
