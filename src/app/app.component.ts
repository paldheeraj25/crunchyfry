import { Component, OnInit } from "@angular/core";
import { CartService } from "./components/cart/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private cartServ: CartService) {}

  ngOnInit() {
    this.cartServ.initialiseState();
  }
}
