import axios from "axios";
import {AccountDTO} from "@/pages/account/store/models/DTO/accountDTO";

export const accountService = {

  async sendLoginData(payload) {
    console.log('accountService sendLoginData + payload: ', payload)
    let accountDTO = new AccountDTO(null, null, null, null, null, null, null, null, payload.email, payload.passw, payload.newpassword)
    const loginAnswer = await axios.post("http://localhost:8080/user/login/", accountDTO)
    return loginAnswer.data;
  },

  async register(payload) {
    console.log('Account.service accountService register: ', payload)
    let accountDTO = new AccountDTO(payload.userID, payload.firstname, payload.familyName, payload.address, payload.city, payload.state, payload.zip, payload.country, payload.email, payload.oldpassword, payload.newpassword)
    console.log('accountService register: accountDTO ', accountDTO)
    const registerAnswer = await axios.post("http://localhost:8080/user/register/", accountDTO)
    return registerAnswer.data;
  },


  async logout(userID) {
    let accountDTO = new AccountDTO(userID, null, null, null, null, null, null, null, null, null, null)
    return await axios.post("http://localhost:8080/user/logout/", accountDTO)
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
