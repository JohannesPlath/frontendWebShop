import axios from 'axios'

export const productService = {
  async getProducts(cb) {
    console.log("-------------> ");
    try {
      const productList = await axios.post("http://localhost:8082/finalize");
      cb(productList.data)
      console.log("-------------> ", productList);
    } catch (error) {
      console.error(error);
    }
  },

  buyProducts(products, cb, errorCb) {
  }
}

