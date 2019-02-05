export class Item {
  constructor(name, price, tax) {
    this.name = name;
    this.price = price;
    this.tax = tax;
  }

  static sortItems(items) {
    items = items.sort((item, otherItem) => {
      return item.netPrice() - otherItem.netPrice();
    });
    return items;
  }

  netPrice() {
    if (isNaN(this.price)) {
      throw new Error("Invalid Input");
    }
    return this.price + (this.tax * this.price) / 100;
  }
}
