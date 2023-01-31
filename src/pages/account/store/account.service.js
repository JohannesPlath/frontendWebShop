import axios from "axios";
import {AccountDTO} from "@/pages/account/store/DTO/accountDTO";
import accountStore from "@/pages/account/store/account-store";

export const accountService = {

  async sendLoginData({state, commit}, payload) {
    console.log('accountService sendLoginData: ', payload.mail)
    let accountDTO = new AccountDTO(null, null, null, null, null, null, null, null, payload.mail, payload.passw)
    console.log('accountService sendLoginData: ', accountDTO.mail, " & ", accountDTO.password)
    const loginAnswer = await axios.post("http://localhost:8080/user/login/", accountDTO)
    console.log('accountService logInAnswer: ', loginAnswer)
    accountStore.actions.setCredentials({state, commit}, loginAnswer.data);
  },
  logout(userID) {
    console.log('accountService logout: ', userID)
    axios.post("http://localhost:8080/user/logout/", {userId: userID})
  },
  /*async pushToCartBackend(items, credentials, payment) {
    let dtoList = this.getItemsAndCount(items)
    /!*let axiosResponse = await axios.get("http://localhost:8080/product/finalize" /!*{body: dtoList}*!/);
    console.log('cartService pushToCartBackend: ', axiosResponse)*!/
    console.log("-------------> ");
    try {
      //const productList = await axios.post("http://localhost:8080/product/finalize");
      //const productList2 = await axios.post("http://localhost:8082/cart/finalize");
      const productList3 = await axios.get("http://localhost:8082/cart/hello");

      console.log("-------------> ", productList2);
    } catch (error) {
      console.error(error);
    }

  },*/

  /* async addProduct(userId, product, amount) {
     let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
     console.log('cartService addProduct: ', changeAtCartDTO)
     axios.post("http://localhost:8080/cart/ProductToCart/", changeAtCartDTO)
   },
 //"/CartStatus/{userid}/{productId}/{productCount}"

   async reduceProduct(userId, product, amount) {
     let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
     console.log('cartService reduceProduct: ', changeAtCartDTO)
     axios.post("http://localhost:8080/cart/ProductFromCart/", changeAtCartDTO)
   },


   getItemsAndCount(items) {
     let dtoList = []
     for (let item of items) {
       dtoList.push({productId: item.uuid, count: item.amount})
     }
     return dtoList
   }*/

}
