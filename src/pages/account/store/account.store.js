import {accountService} from "@/pages/account/store/account.service";
import {User} from "@/pages/account/store/models/user";

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
        state: "brandenburg",
        zip: "12345",
        country: "Deutschland",
        email: "no registered mail",
        password: "",
        confirmedPassword: "", //todo Löschen und testen
      }
    }
  },

  getters: {
    getCredentials(state) {
      return state.credential
    }
  },

  actions: {
    async logIn({state, commit}, payload) {
      console.log("payload ", payload.email, " ", payload.passw)
      const singInAnswer = await accountService.sendLoginData(payload)
      const user = new User(singInAnswer.userID, singInAnswer.firstname, singInAnswer.familyName, singInAnswer.address, singInAnswer.city, singInAnswer.state, singInAnswer.zip, singInAnswer.country, singInAnswer.email, singInAnswer.password)
      commit('setCredentials', user)
      commit("signInMutation")
    },
    async register({state, commit}, payload) {
      console.log('@accountStore actions register: ', payload)
      const registeredUser = await accountService.register(payload)
      commit('setCredentials', registeredUser)
    },

    setCredentials({state, commit}, payload) {
      commit('setCredentials', {state, commit}, payload)
    },

    logout({state, commit}) {
      let isLoggedOut = accountService.logout(state.credential.userID)
      commit('clearCredentials', isLoggedOut)
    }
  },

  mutations: {
    signInMutation(state, mail, passw) {
    },

    registerMutation(state, mail, passw) {
    },

    clearCredentials(state, payload) {
      console.log('mutations clearCredentials: ', payload)
      state.credential = {
        firstname: "John",
        familyName: "NotRegistered",
      }
    },

    setCredentials(state, payload) {
      state.credential = payload
    }
  },


}

export default account