import axios from 'axios'

export const productService = {
  async getProducts(cb) {
    try {
      const productList = jsonList; //await axios.get("http://localhost:8080/product");
      cb(productList)
      console.log(productList);
    } catch (error) {
      console.error(error);
    }
  },

  buyProducts(products, cb, errorCb) {

  }
}

const jsonList = [
  {
    "id": "fd9abf9c-c68f-4972-8e33-d0820638d03d",
    "title": "Chicken Boneless Burner",
    "currency": "EURO",
    "category": "DOPE",
    "count": 4,
    "price": 12.5,
    "createDate": null,
    "updatedAt": null,
    "description": "high intensive dark smoked weed",
    "url": "https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg",
    "deleted": false
  },
  {
    "id": "29505819-126e-4b81-8afb-820b9467420d",
    "title": "hawaiaien",
    "currency": "EURO",
    "category": "DOPE",
    "count": 4,
    "price": 9.5,
    "createDate": null,
    "updatedAt": null,
    "description": "Fancy visionary light dope",
    "url": "https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg",
    "deleted": false
  },
  {
    "id": "687e43de-92f8-4bca-a746-3fdeaed6d819",
    "title": "purpleHase",
    "currency": "EURO",
    "category": "DOPE",
    "count": 4,
    "price": 11.5,
    "createDate": null,
    "updatedAt": null,
    "description": "classic purple dope",
    "url": "https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg",
    "deleted": false
  },
  {
    "id": "0238ce35-4721-4e12-8b71-728c3c5f458d",
    "title": "Lolipop",
    "currency": "EURO",
    "category": "PROCESSED",
    "count": 2,
    "price": 2.5,
    "createDate": null,
    "updatedAt": null,
    "description": "Sweet lolipopp with 1g thc",
    "url": "https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg",
    "deleted": false
  },
  {
    "id": "42023e0b-b221-4023-9f40-2c781f723f1d",
    "title": "orangeBudd",
    "currency": "EURO",
    "category": "DOPE",
    "count": 7,
    "price": 13.5,
    "createDate": null,
    "updatedAt": null,
    "description": "the classic dope",
    "url": "https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg",
    "deleted": false
  },
  {
    "id": "77fce8ba-0213-4f4c-b2aa-67244eb5fc12",
    "title": "Love And Peace Cup",
    "currency": "EURO",
    "category": "NON_DOPE",
    "count": 7,
    "price": 3.5,
    "createDate": null,
    "updatedAt": null,
    "description": "a cup, a f*** cup",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXS93Vb0IKHbrv4qGhLV4S0m637GXzaAXieRiAePatOhjl9G_1xjHjy0gCUiUFrUwEEo&usqp=CAU",
    "deleted": false
  }
]

