import { Item } from "./item.js";

export function Salad(type, weight) {
  Item.call(this, type);
  switch (type) {
    case "cesar":
      this.params = { ...Salad.CESAR, weight };
      break;

    case "olivier":
      this.params = { ...Salad.OLIVIER, weight };
      break;
  }

  this.params.price = (weight / Salad.DEFAUT_WEIGHT) * this.params.price;

  Object.freeze(this);
}

Salad.CESAR = { price: 100, cal: 20 };
Salad.OLIVIER = { price: 50, cal: 80 };
Salad.DEFAUT_WEIGHT = 100;

Salad.prototype = Object.create(Item.prototype);
Object.defineProperty(Salad.prototype, "constructor", {
  value: Salad,
  enumerable: false,
  writable: true,
});
