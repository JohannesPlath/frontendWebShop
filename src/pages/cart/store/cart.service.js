import axios from 'axios'
import {ChangeAtCartDTO} from "@/pages/cart/store/DTO/changeAtCartDTO";

export const cartService = {

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


  /* getItemsAndCount(items) {
     let dtoList = []
     for (let item of items) {
       dtoList.push({productId: item.uuid, count: item.amount})
     }
     return dtoList
   }*/
}

