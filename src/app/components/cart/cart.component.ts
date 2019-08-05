import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CrunchListService } from "../../utils/crunch-list.service";

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
  constructor(private crunchListServ: CrunchListService) {
    this.carts$ = this.crunchListServ.getCrunchList();
  }

  onClose() {
    this.unsetCart.emit();
  }
}
