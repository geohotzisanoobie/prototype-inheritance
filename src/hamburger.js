import { Item } from "./item.js";

export function Hamburger(size, stuffing) {
  Item.call(this, Hamburger.TYPE);
  switch (size) {
    case "small":
      this.size = Hamburger.SIZE_SMALL;
      break;
    case "large":
      this.size = Hamburger.SIZE_LARGE;
      break;
  }

  switch (stuffing) {
    case "cheese":
      this.stuffing = Hamburger.STUFFING_CHEESE;
      break;
    case "potato":
      this.stuffing = Hamburger.STUFFING_POTATO;
      break;
    case "salad":
      this.stuffing = Hamburger.STUFFING_SALAD;
      break;
  }

  this.params = {
    price: this.stuffing.price + this.size.price,
    cal: this.stuffing.cal + this.size.cal,
  };

  this.size = size;
  this.stuffing = stuffing;

  Object.freeze(this);
}

Hamburger.SIZE_SMALL = { price: 50, cal: 20 };
Hamburger.SIZE_LARGE = { price: 100, cal: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, cal: 20 };
Hamburger.STUFFING_SALAD = { price: 20, cal: 5 };
Hamburger.STUFFING_POTATO = { price: 15, cal: 10 };
Hamburger.TYPE = "hamburger";

Hamburger.prototype = Object.create(Item.prototype);
Object.defineProperty(Hamburger.prototype, "constructor", {
  value: Hamburger,
  enumerable: false,
  writable: true,
});
