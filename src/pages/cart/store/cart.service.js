import axios from 'axios'
import {ChangeAtCartDTO} from "@/pages/cart/store/DTO/changeAtCartDTO";
import {PaymentDTO} from "@/pages/cart/store/DTO/paymentDTO";
import {FinalizeDTO} from "@/pages/cart/store/DTO/finalizeDTO";

export const cartService = {

    async setPayment(payload) {
        //constance.js pathVar = {uuid: userId, paymnet: paymnet}
        console.log('cartService setPayment: user + payment', payload.uuid, " ", payload.payment)
        const paymentDTO = new PaymentDTO(payload.uuid, payload.payment)
        //constance.js pathVar = {uuid: userId, paymnet: paymnet}
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

    async finalizeOrder(userID, payment) {
        console.log('cartService finalizeOrder: ', userID, payment)
        let finalizeOrder = new FinalizeDTO(userID, payment, null, false)
        console.log('cartService finalizeOrder object FinalizeDTO: ', finalizeOrder)

        return await axios.post("http://localhost:8080/finalize/order/", finalizeOrder)
    }
    /* getItemsAndCount(items) {
       let dtoList = []
       for (let item of items) {
         dtoList.push({productId: item.uuid, count: item.amount})
       }
       return dtoList
     }*/
}

