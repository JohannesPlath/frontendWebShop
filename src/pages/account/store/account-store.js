import {accountService} from "@/pages/account/store/account.service";

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
    signIn({state, commit}, payload) {
      console.log("payload ", payload.mail, " ", payload.passw)
      let isRegisterrdUser = accountService.sendLoginData({state, commit}, payload)
      console.log('----- >  actions signIn: ', isRegisterrdUser)
      commit("logInMutation")
    },

    setCredentials({state, commit}, payload) {
      console.log("payload ", payload)
      commit('setCredentials', payload)
    }
  },

  mutations: {
    logInMutation(state, mail, passw) {

    },

    setCredentials(state, payload) {
      state.credential = payload
    }
  },

}

export default account
