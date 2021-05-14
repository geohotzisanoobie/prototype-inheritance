export function Item(type, params) {
  this.type = type;
  this.params = params || {};
}

Item.prototype.getType = function () {
  return this.type;
};

Item.prototype.getPrice = function () {
  return this.params.price;
};

Item.prototype.getCalories = function () {
  return this.params.cal;
};
