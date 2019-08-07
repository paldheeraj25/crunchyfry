import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { CrunchListService } from "src/app/utils/crunch-list.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private state = new BehaviorSubject<any>({});
  constructor(private crunchServ: CrunchListService) {}

  initialiseState() {
    const state = {
      items: [],
      deliveryCharges: 0,
      totalPrice: 0
    };
    this.updateState(state);
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }

  addToCart(item) {
    const state = JSON.parse(localStorage.getItem("crunchy-cart"));
    state.items.push(item);
    this.updateState(state);
  }

  updateCart(item, action) {
    const state = JSON.parse(localStorage.getItem("crunchy-cart"));
    let index = -1;
    switch (action) {
      case "add":
        state.items.push(item);
        break;
      case "remove":
        index = state.items.findIndex(cartItem => cartItem.id === item.id);
        state.items.splice(index, 1);
        break;
      case "weight":
        index = state.items.findIndex(cartItem => cartItem.id === item.id);
        state.items[index] = item;
    }
    this.updateState(state);
  }

  removeFromCart(item) {
    const state = JSON.parse(localStorage.getItem("crunchy-cart"));
    const index = state.items.findIndex(cartItem => cartItem.id === item.id);
    state.items.splice(index, 1);
    this.updateState(state);
  }

  updateState(newState) {
    localStorage.setItem("crunchy-cart", JSON.stringify(newState));
    this.state.next(newState);
  }

  calcPrice(item, action) {
    const weight = item.weight;
    item.weight = action === "plus" ? weight + 50 : weight - 50;
    item.price = Math.floor(item.pricePer50gms * (item.weight / 50));
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
