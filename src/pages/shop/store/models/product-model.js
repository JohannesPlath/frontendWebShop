export class ProductModel {

  constructor(uuid, title, currency, category, count, price, description, picUrl, countForCart) {
    this.uuid = uuid;
    this.title = title;
    this.currency = currency;
    this.category = category;
    this.count = count;
    this.price = price;
    this.description = description;
    this.picUrl = picUrl;
    this.countForCart = countForCart;

  }
}
