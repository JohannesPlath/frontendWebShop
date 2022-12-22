import axios from 'axios'

export const cartService = {

  async pushToCartBackend(items, credentials, payment) {
    let dtoList = this.getItemsAndCount(items)
    let axiosResponse = await axios.post("http://localhost:8082/finalize", dtoList);
    console.log('cartService pushToCartBackend: ', axiosResponse)
  },

  buyProducts(products, cb, errorCb) {
  },

  getItemsAndCount(items) {
    let dtoList = []
    for (item of items) {
      dtoList.push({productId: item.uuid, count: item.amount})
    }
    return dtoList
  }
}

