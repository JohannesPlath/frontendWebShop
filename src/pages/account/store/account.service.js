import axios from "axios";
import {AccountDTO} from "@/pages/account/store/models/DTO/accountDTO";
import {Constance} from "@/constance";

export const accountService = {

  async sendLoginData(payload) {
    let accountDTO = new AccountDTO(null, null, null, null, null, null, null, null, payload.email, payload.passw, payload.newpassword)
    const loginAnswer = await axios.post(Constance.BACKEND_URl + "user/login/", accountDTO)
    return loginAnswer.data;
  },

  register: async function (payload) {
    let accountDTO
    if (payload.userID != null) {
      accountDTO = new AccountDTO(payload.userID, payload.firstname, payload.familyName, payload.address, payload.city, payload.state, payload.zip, payload.country, payload.email, payload.oldpassword, payload.newpassword)
    } else {
      accountDTO = new AccountDTO(null, payload.firstname, payload.familyName, payload.address, payload.city, payload.state, payload.zip, payload.country, payload.email, payload.oldpassword, payload.newpassword)
    }
    const registerAnswer = await axios.post(Constance.BACKEND_URl + "user/register/", accountDTO)
    return registerAnswer.data;
  },


  async logout(userID) {
    let accountDTO = new AccountDTO(userID, null, null, null, null, null, null, null, null, null, null)
    return await axios.post(Constance.BACKEND_URl + "user/logout/", accountDTO)
  },


}
