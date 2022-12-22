import axios from 'axios'

export const cartService = {

  async pushToCartBackend(items, credentials, payment) {
    let dto = getItemsAndCount(items)
    try {
      const productList = await axios.post("http://localhost:8082/finalize");
      cb(productList.data)
      console.log("-------------> ", productList);
    } catch (error) {
      console.error(error);
    }
  },

  buyProducts(products, cb, errorCb) {
  },

  getItemsAndCount(items) {
    let dtoList = []
    let dto = {
      productId: null,
      count: 0,
    }
    /*for (item of items){
      if (item.id )
    }*/
  }
}

