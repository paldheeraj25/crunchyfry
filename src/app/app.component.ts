import { Component, OnInit } from "@angular/core";
import { CartService } from "./components/cart/cart.service";
import { ApiService } from "./utils/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private cartServ: CartService, private apiServ: ApiService) {}

  ngOnInit() {
    this.cartServ.initialiseState();
  }
}
