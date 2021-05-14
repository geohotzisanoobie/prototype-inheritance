import { Item } from "./item.js";

export function Drink(type) {
  Item.call(this, type);
  switch (type) {
    case "cola":
      this.params = Drink.COLA;
      break;

    case "coffee":
      this.params = Drink.COFFEE;
      break;
  }

  Object.freeze(this);
}

Drink.COLA = { price: 50, cal: 40 };
Drink.COFFEE = { price: 80, cal: 20 };

Drink.prototype = Object.create(Item.prototype);
Object.defineProperty(Drink.prototype, "constructor", {
  value: Drink,
  enumerable: false,
  writable: true,
});
