//represents a person who does shopping

export class ShoppingAgent {
  constructor(listOfItems) {
    this.listOfItems = listOfItems;
  }

  buyItems(budget) {
    let itemsPurchased = [];
    this.listOfItems = this.listOfItems.sort((item, otherItem) => {
      return item.price - otherItem.price;
    });

    this.listOfItems.forEach(eachItem => {
      if (budget >= eachItem.price) {
        itemsPurchased.push(eachItem);
        budget -= eachItem.price;
      }
    });
    return itemsPurchased;
  }
}
