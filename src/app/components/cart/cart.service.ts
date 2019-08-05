import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {}

  calcPrice(item, action) {
    const weight = item.weight;
    item.weight = action === "plus" ? weight + 50 : weight - 50;
    item.price = Math.floor(item.pricePer100gms * (item.weight / 100));
    return item;
  }

  calcTotalPrice(items) {
    const totalPrice = items.reduce(function(sum, cart) {
      return sum + cart.price;
    }, 0);
    const deliveryCharges = totalPrice < 500 ? 50 : 0;
    return { totalPrice, deliveryCharges };
  }
}
