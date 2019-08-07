import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CrunchListService } from "src/app/utils/crunch-list.service";
import { CartService } from "../cart/cart.service";
import { ApiService } from "src/app/utils/api.service";

@Component({
  selector: "app-crunch-list",
  templateUrl: "./crunch-list.component.html",
  styleUrls: ["./crunch-list.component.scss"]
})
export class CrunchListComponent implements OnInit {
  crunchList: any;
  state;

  constructor(
    private router: Router,
    private apiServ: ApiService,
    private cartServ: CartService
  ) {
    this.apiServ.getCrunchies().subscribe(data => {
      console.log("iam updated");
      this.crunchList = data;
    });
  }

  ngOnInit() {}

  addToCart(e, crunch) {
    e.stopPropagation();
    crunch.cart = true;
    this.cartServ.updateCart(crunch, "add");
  }

  removeFromCart(e, crunch) {
    e.stopPropagation();
    crunch.cart = false;
    this.cartServ.updateCart(crunch, "remove");
  }

  updateWeight(e, crunch, action) {
    e.stopPropagation();
    crunch = this.cartServ.calcPrice(crunch, action);
  }

  detailsView(crunch) {
    this.router.navigate([crunch.id, "details"]);
  }
}
