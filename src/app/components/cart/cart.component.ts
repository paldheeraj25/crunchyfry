import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

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

  constructor() {}

  onClose() {
    this.unsetCart.emit();
  }
}
