import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private message = new Subject<any>();
  private state = new Subject<any>();
  constructor() {}

  getMessage(): Observable<any> {
    return this.message.asObservable();
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }

  updateState(newState) {
    this.state.next(newState);
  }

  updateMessage(message: string) {
    this.message.next(message);
  }

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
