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
      this.state = state;
    });
  }

  ngOnChanges() { }

  onClose() {
    this.unsetCart.emit();
  }

  updateWeight(item, action) {
    item = this.cartServ.calcPrice(item, action);
    this.cartServ.updateCart(item, "weight");
  }

  removeCartItem(item) {
    item.cart = false;
    this.cartServ.updateCart(item, "remove");
  }

  checkout() {
    this.router.navigate(["/checkout/checkout-address"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
