import axios from 'axios/index'

export const productService = {
  async getProducts(cb) {
  try{  const productList = await axios.get("http://localhost:8080/product");
    cb(productList)
    console.log(productList);
  } catch (error) {
      console.error(error);
    }
  },

  buyProducts(products, cb, errorCb) {

  }


}
