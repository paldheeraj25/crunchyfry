import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CrunchListService } from "src/app/utils/crunch-list.service";
import { CartService } from "./cart.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent {
  @Input()
  setCart = false;
  @Output()
  unsetCart = new EventEmitter();

  carts$ = [];
  totalPrice = 0;
  deliveryCharges = 0;
  messageFromSibling = "";
  subscription: Subscription;
  constructor(
    private crunchListServ: CrunchListService,
    private cartServ: CartService
  ) {
    this.carts$ = this.crunchListServ.getCrunchList();
    this.subscription = this.cartServ
      .getState()
      .subscribe(state => (this.totalPrice = state.totalPrice));
  }

  calcTotalPrice() {
    const values = this.cartServ.calcTotalPrice(this.carts$);
    this.totalPrice = values.totalPrice;
    this.deliveryCharges = values.deliveryCharges;
  }

  ngOnChanges() {
    this.calcTotalPrice();
  }

  onClose() {
    this.unsetCart.emit();
  }

  updateWeight(item, action, index) {
    this.carts$[index] = this.cartServ.calcPrice(item, action);
    this.calcTotalPrice();
  }

  removeCartItem(index) {
    this.carts$.splice(index, 1);
    this.calcTotalPrice();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  checkout() {
    this.router.navigate(["/checkout/checkout-address"]);
  }
}
