import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CrunchListService } from "../../utils/crunch-list.service";
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

  totalPrice: any;
  deliveryCharge: any;

  carts$ = [];
  constructor(private crunchListServ: CrunchListService, public router: Router) {
    this.carts$ = this.crunchListServ.getCrunchList();
  }

  onClose() {
    this.unsetCart.emit();
  }

  checkout() {
    this.router.navigate(["/checkout/checkout-address"]);
  }
}
