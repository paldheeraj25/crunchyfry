import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  toggleCart = false;
  // cartViewUpdated: EventEmitter<any> = new EventEmitter();
  private cartViewUpdated = new Subject<any>();
  public updateCart$ = this.cartViewUpdated.asObservable();

  constructor() { }

  showCart() {
    this.toggleCart = true;
    this.cartViewUpdated.next({ value: this.toggleCart });
  }

  hideCart() {
    this.toggleCart = false;
    this.cartViewUpdated.next({ text: this.toggleCart });
  }
}
