import axios from 'axios'
import {ChangeAtCartDTO} from "@/pages/cart/store/DTO/changeAtCartDTO";
import {PaymentDTO} from "@/pages/cart/store/DTO/paymentDTO";
import {FinalizeDTO} from "@/pages/cart/store/DTO/finalizeDTO";
import {Constance} from "@/constance";

export const cartService = {

  async setPayment(payload) {
    //constance.js pathVar = {uuid: userId, paymnet: paymnet}
    const paymentDTO = new PaymentDTO(payload.uuid, payload.payment)
    //constance.js pathVar = {uuid: userId, paymnet: paymnet}
    return await axios.post("http://localhost:8080/paymentStore/payment/", paymentDTO)
  },

  async addProduct(userId, product, amount) {
    let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
    await axios.post(Constance.BACKEND_URl + "cart/ProductToCart/", changeAtCartDTO)
  },


  async reduceProduct(userId, product, amount) {
    let changeAtCartDTO = new ChangeAtCartDTO(product.uuid, userId, amount)
    await axios.post(Constance.BACKEND_URl + "cart/ProductFromCart/", changeAtCartDTO)
  },

  async getCartOfUser(id) {
    let changeAtCartDTO = new ChangeAtCartDTO(null, id, 0)
    const response = await axios.post(Constance.BACKEND_URl + "cart/fetchCartOfUser/", changeAtCartDTO);//{params: {uuid: id}});
    return response.data

  },

  async finalizeOrder(userID, payment) {
    let finalizeOrder = new FinalizeDTO(userID, payment, null, false)
    return await axios.post(Constance.BACKEND_URl + "finalize/order/", finalizeOrder)
  }

}

