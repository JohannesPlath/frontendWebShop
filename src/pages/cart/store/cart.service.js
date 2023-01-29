import axios from 'axios'
import {AddProductDTO} from "@/pages/cart/store/DTO/addProductDTO";

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
    let addProductDto = new AddProductDTO(product.uuid, userId, 1)
    console.log('cartService addProduct: ', addProductDto)
    axios.post("http://localhost:8080/cart/ProductToCart/", addProductDto)
  },
//"/CartStatus/{userid}/{productId}/{productCount}"

  getItemsAndCount(items) {
    let dtoList = []
    for (let item of items) {
      dtoList.push({productId: item.uuid, count: item.amount})
    }
    return dtoList
  }
}

