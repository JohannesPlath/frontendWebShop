export class FinalizeDTO {
  constructor(userID, payment, message, hsBeenFinalized) {
    this.userID = userID;
    this.payment = payment;
    this.message = message;
    this.hasBeenFinalized = hsBeenFinalized;
  }
}
