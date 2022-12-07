const accountModule = {
  namespaced: true,
  state() {
    return {
      credential:{
      name: "",
      address:"",
      city: "",
      state: "",
      zip: "",
      country: "",
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

export default accountModule
