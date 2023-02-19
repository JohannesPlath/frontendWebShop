export class PaymentDTO {
  constructor(userId, payment) {
    this.uuid = userId;
    this.payment = payment;
  }
}
