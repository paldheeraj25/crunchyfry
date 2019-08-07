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
    const initialState = {
      items: [...this.crunchServ.getCrunchList()],
      totalPrice: 100,
      deliveryPrice: 100
    };
    this.updateState(initialState);
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }

  updateState(newState) {
    this.state.next(newState);
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
