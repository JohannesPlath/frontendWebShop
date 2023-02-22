import axios from 'axios'
import {ChangeAtCartDTO} from "@/pages/cart/store/DTO/changeAtCartDTO";
import {PaymentDTO} from "@/pages/cart/store/DTO/paymentDTO";

export const cartService = {

  async setPayment(payload) {
    //const pathVar = {uuid: userId, paymnet: paymnet}
    console.log('cartService setPayment: user + payment', payload.uuid, " ", payload.payment)
    const paymentDTO = new PaymentDTO(payload.uuid, payload.payment)
    //const pathVar = {uuid: userId, paymnet: paymnet}
    console.log('cartService setPayment paymentDto: ', paymentDTO)
    return await axios.post("http://localhost:8080/paymentStore/payment/", paymentDTO)
  },

  async addProduct(userId, product, amount) {
    let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
    console.log('cartService addProduct: ', changeAtCartDTO)
    await axios.post("http://localhost:8080/cart/ProductToCart/", changeAtCartDTO)
  },


  async reduceProduct(userId, product, amount) {
    let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
    console.log('cartService reduceProduct: ', changeAtCartDTO)
    await axios.post("http://localhost:8080/cart/ProductFromCart/", changeAtCartDTO)
  },

  async getCartOfUser(id) {
    console.log('cartService getCartOfUser: ', id);
    let changeAtCartDTO = new ChangeAtCartDTO(null, id, 0)
    const response = await axios.post("http://localhost:8080/cart/fetchCartOfUser/", changeAtCartDTO);//{params: {uuid: id}});
    console.log("-------------> ", response.data);
    return response.data
    /*} catch (error) {
      console.error(error);
    }*/
  },

  async finalizeOrder(credentials, payment) {
    console.log('cartService finalizeOrder: ', credentials.uuid, payment)
    let finalizeOrder = new PaymentDTO(credentials.userID, payment)
    const resp = await axios.post("http://localhost:8080/finalize/order/", finalizeOrder)
    console.log('cartService finalizeOrder response: ', resp.data)
  }
  /* getItemsAndCount(items) {
     let dtoList = []
     for (let item of items) {
       dtoList.push({productId: item.uuid, count: item.amount})
     }
     return dtoList
   }*/
}

