//represents a person who does shopping

export class ShoppingAgent {
  constructor(listOfItems) {
    this.listOfItems = listOfItems;
  }

  buyItems(budget) {
    let itemsPurchased = [];
    this.listOfItems = this.listOfItems.sort((item, otherItem) => {
      return this.netPrice(item) - this.netPrice(otherItem);
    });
    this.listOfItems.forEach(eachItem => {
      let price = this.netPrice(eachItem);
      if (budget >= price) {
        itemsPurchased.push(eachItem);
        budget -= price;
      }
    });
    return itemsPurchased;
  }

  netPrice(item) {
    if (isNaN(item.price)){
      throw new Error("Price is required");
    }
    return item.price + (item.tax * item.price) / 100;
  }
}
