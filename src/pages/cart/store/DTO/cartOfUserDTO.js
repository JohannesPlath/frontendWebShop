export class CartOfUserDTO {

  constructor(userId, sumOfProducts, sumOfPrice, productList) {
    this.userID = userId;
    this.sumOfProducts = sumOfProducts;
    this.sumOfPrice = sumOfPrice;
    this.productList = productList;


  }

}
