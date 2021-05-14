import { Item } from "./item.js";

export function Salad(type) {
  Item.call(this, type);
  switch (type) {
    case "cesar":
      this.params = Salad.CESAR;
      break;

    case "olivier":
      this.params = Salad.OLIVIER;
      break;
  }

  Object.freeze(this);
}

Salad.CESAR = { price: 100, cal: 20 };
Salad.OLIVIER = { price: 50, cal: 80 };

Salad.prototype = Object.create(Item.prototype);
Object.defineProperty(Salad.prototype, "constructor", {
  value: Salad,
  enumerable: false,
  writable: true,
});
