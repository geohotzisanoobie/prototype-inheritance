export function Order(orderList) {
  this.orderList = orderList || [];
  this.isOrdered = false;
}

Order.prototype.getOrderList = function () {
  if (!this.orderList.length) {
    console.log("order list is empty");
    return;
  }
  return this.orderList;
};

Order.prototype.setOrderList = function (list) {
  if (this.isOrdered) {
    console.log("Order is already served");
    return;
  }
  this.orderList = list;
};

Order.prototype.deletePosition = function (type) {
  if (this.isOrdered) {
    console.log("Can't delete position, order is already served");
    return;
  }
  if (!this.orderList.length) {
    console.log("order list is empty");
    return;
  }
  const orderList = [...this.getOrderList()];
  const positionIndex = orderList.findIndex(
    (position) => position.type === type
  );

  if (positionIndex === -1) {
    console.log(`There is no ${type} position in order list`);
    return;
  }

  orderList.splice(positionIndex, 1);
  this.setOrderList(orderList);
};

Order.prototype.addPosition = function (item) {
  if (this.isOrdered) {
    console.log("Can't add position, order is already served");
    return;
  }
  const newOrderList = [...this.getOrderList(), item];
  this.setOrderList(newOrderList);
  return newOrderList;
};

Order.prototype.calculateOrderPrice = function () {
  return this.getOrderList().reduce((a, b) => {
    return a + b.getPrice();
  }, 0);
};

Order.prototype.calculateOrderCalories = function () {
  return this.getOrderList().reduce((a, b) => {
    return a + b.getCalories();
  }, 0);
};

Order.prototype.calculateOrderCaloriesAndPrice = function () {
  return {
    cal: this.calculateOrderCalories(),
    price: this.calculateOrderPrice(),
  };
};

Order.prototype.serve = function () {
  this.isOrdered = true;
  Object.freeze(this);
};
