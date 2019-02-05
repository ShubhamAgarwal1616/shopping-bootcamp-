import { Item } from "../src/item";

//represents a person who does shopping
export class ShoppingAgent {
  constructor(listOfItems) {
    this.listOfItems = listOfItems;
  }

  buyItems(budget) {
    let itemsPurchased = [];
    let sortedList = Item.sortItems(this.listOfItems);
    sortedList.forEach(eachItem => {
      let price = eachItem.netPrice();
      if (budget >= price) {
        itemsPurchased.push(eachItem);
        budget -= price;
      }
    });
    return itemsPurchased;
  }
}
