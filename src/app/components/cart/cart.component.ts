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

  state = {
    items: [],
    totalPrice: 0,
    deliveryCharges: 0
  };
  subscription: Subscription;
  constructor(private cartServ: CartService, private router: Router) {
    this.subscription = this.cartServ.getState().subscribe(state => {
      console.log(state);
      this.state = state;
    });
  }

  ngOnChanges() {}

  onClose() {
    this.unsetCart.emit();
  }

  updateWeight(item, action, index) {}

  removeCartItem(index) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  checkout() {
    this.router.navigate(["/checkout/checkout-address"]);
  }
}
