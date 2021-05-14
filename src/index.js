import { Hamburger } from "./hamburger.js";
import { Drink } from "./drink.js";
import { Salad } from "./salad.js";
import { Order } from "./order.js";

const hambLargeWithPotato = new Hamburger("large", "potato");
const cola = new Drink("cola");
const salad = new Salad("cesar");

const order = new Order([cola, salad, hambLargeWithPotato]);
console.log({ order });
console.log("calories", order.calculateOrderCalories());
console.log("price", order.calculateOrderPrice());
order.deletePosition("cola");
console.log("order list", order.getOrderList());
order.addPosition(new Salad("olivier"));
console.log("order list", order.getOrderList());
order.serve();
order.addPosition(cola);
order.deletePosition(cola);
console.log("total", order.calculateOrderCaloriesAndPrice());
