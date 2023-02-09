export class ChangeAtCartDTO {

  constructor(productId, userID, count) {
    this.productId = productId;
    this.userID = userID;
    this.count = count;
  }
}
