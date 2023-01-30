const account = {
  namespaced: true,
  state() {
    return {
      credential: {
        userID: "3226024e-704d-4fa9-bf9b-fd7233ee2d14",
        firstname: "John",
        familyName: "NotRegistered",
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

  actions: {
    signIn(mail, password) {
      console.log("payload ", mail, " ", password)
      context.commit("logInMutation")
    },

    setCredentials(context, payload) {
      console.log("payload ", payload)
      context.commit('setCredentials', payload)
    }
  },

  mutations: {
    singInMutation(state, mail, passw) {

    },

    setCredentials(state, payload) {
      state.credential = payload
    }
  },

}

export default account
