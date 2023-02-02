import {accountService} from "@/pages/account/store/account.service";
import {mapActions} from "vuex";

const account = {
  namespaced: true,
  state() {
    return {
      credential: {
        userID: "3226024e-704d-4fa9-bf9b-fd7233ee2d14",
        firstname: "John",
        familyName: "NotRegistered",
        address: "FancyStreet 32",
        city: "Cloud Valley-Amsterdam",
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
      let isRegisteredUser = accountService.sendLoginData({state, commit}, payload)
      console.log('----- >  actions signIn: ', isRegisteredUser)
      commit("logInMutation")
    },

    setCredentials({state, commit}, payload) {
      console.log("payload ", payload)
      commit('setCredentials', payload)
    },

    logout({state, commit}) {
      console.log('actions logout: ', state.credential.userID)
      accountService.logout(state.credential.userID)
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
