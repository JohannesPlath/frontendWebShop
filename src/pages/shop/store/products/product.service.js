import axios from 'axios'

export const productService = {
  async getProducts(cb) {
    console.log("-------------> ");
    try {
      const productList = await axios.get("http://localhost:8080/product");
      cb(productList.data)
      console.log("-------------> ", productList);
    } catch (error) {
      console.error(error);
    }
  },

}

