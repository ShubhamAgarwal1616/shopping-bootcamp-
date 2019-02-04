import { ShoppingAgent } from "../src/ShoppingAgent";

describe("buyItems", () => {
  it("expects items which are bought with the budget", () => {
    let listOfItems = [
      { name: "book1", price: 5 },
      { name: "book2", price: 10 },
      { name: "book3", price: 20 }
    ];
    let itemsPurchased = [
      { name: "book1", price: 5 },
      { name: "book2", price: 10 }
    ];
    let budget = 20;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });

  it("expects items which are bought with the budget", () => {
    let listOfItems = [
      { name: "book1", price: 10 },
      { name: "book2", price: 15 },
      { name: "book3", price: 5 }
    ];
    let itemsPurchased = [
      { name: "book3", price: 5 },
      { name: "book1", price: 10 }
    ];
    let budget = 25;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });

  it("expects to buy no items", () => {
    let listOfItems = [];
    let itemsPurchased = [];
    let budget = 25;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });

  it("expects to buy no items when the budget is zero", () => {
    let listOfItems = [
      { name: "book1", price: 10 },
      { name: "book2", price: 30 },
      { name: "book3", price: 15 }
    ];
    let itemsPurchased = [];
    let budget = 0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });
});
