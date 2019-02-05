import { Item } from "../src/item";

describe("netPrice", () => {
  it("expects net price of the item", () => {
    let item = new Item("book2", 100, 10);
    expect (item.netPrice()).toBe(110);
  });

  it("expects net price of the item", () => {
    let item = new Item("book2", "67", 10);
    expect (() => {item.netPrice()}).toThrow(new Error("Invalid Input"));
  });
});
