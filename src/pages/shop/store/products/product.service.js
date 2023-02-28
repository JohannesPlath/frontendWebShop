import axios from 'axios'
import {Constance} from "@/constance";

export const productService = {
  async getProducts(cb) {
    try {
      const productList = await axios.get(Constance.BACKEND_URl + "product");
      cb(productList.data)
    } catch (error) {
      console.error(error);
    }
  },

}

