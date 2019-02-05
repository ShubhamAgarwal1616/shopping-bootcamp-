import { ShoppingAgent } from "../src/ShoppingAgent";
import { Item } from "../src/item";

describe("buyItems", () => {
  it("expects items which are bought with the budget", () => {
    let listOfItems = [
      new Item("book1", "5", 2),
      new Item("book2", 10, 2),
      new Item("book3", 20, 2),
    ];
    let itemsPurchased = [new Item("book1", 5, 2)];
    let budget = 6.0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(() => {shopping.buyItems(budget)}).toThrow(new Error("Invalid Input"));
  });

  it("expects items which are bought with the budget", () => {
    // let listOfItems = [
    //   new Item("book1", 10, 3),
    //   new Item("book2", 15, 3),
    //   new Item("book3", 5, 3)
    // ];
    let listOfItems = ["book1", "book2", "book3"]
    // let itemsPurchased = [
    //   new Item("book3", 5, 3),
    //   new Item("book1", 10, 3)
    // ];
    let itemPurchased = ["book3", "book1"]
    let budget = 25.0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });

  it("expects to buy no items", () => {
    let listOfItems = [];
    let itemsPurchased = [];
    let budget = 25.0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });

  it("expects to buy no items when the budget is zero", () => {
    let listOfItems = [
      new Item("book1", 10, 4),
      new Item("book2", 30, 4),
      new Item("book3", 15, 4)
    ];
    let itemsPurchased = [];
    let budget = 0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });
});
