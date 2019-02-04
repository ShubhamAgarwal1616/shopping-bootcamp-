import { ShoppingAgent } from "../src/ShoppingAgent";

describe("buyItems", () => {
  it("expects items which are bought with the budget", () => {
    let listOfItems = [
      { name: "book1", price: "af", tax: 2 },
      { name: "book2", price: 10, tax: 2 },
      { name: "book3", price: 20, tax: 2 }
    ];
    let itemsPurchased = [{ name: "book1", price: 5, tax: 2 }];
    let budget = 6.0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(() => shopping.buyItems(budget)).toThrow(new Error("Price is required"));
  });

  it("expects items which are bought with the budget", () => {
    let listOfItems = [
      { name: "book1", price: 10, tax: 3 },
      { name: "book2", price: 15, tax: 3 },
      { name: "book3", price: 5, tax: 3 }
    ];
    let itemsPurchased = [
      { name: "book3", price: 5, tax: 3 },
      { name: "book1", price: 10, tax: 3 }
    ];
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
      { name: "book1", price: 10, tax: 4 },
      { name: "book2", price: 30, tax: 4 },
      { name: "book3", price: 15, tax: 4 }
    ];
    let itemsPurchased = [];
    let budget = 0;
    let shopping = new ShoppingAgent(listOfItems);
    expect(shopping.buyItems(budget)).toEqual(itemsPurchased);
  });
});
