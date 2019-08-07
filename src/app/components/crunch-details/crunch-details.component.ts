import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrunchListService } from "../../utils/crunch-list.service";
import { CartService } from "../cart/cart.service";
import { ApiService } from "src/app/utils/api.service";

@Component({
  selector: "app-crunch-details",
  templateUrl: "./crunch-details.component.html",
  styleUrls: ["./crunch-details.component.scss"]
})
export class CrunchDetailsComponent {
  crunch;
  weight = 100;
  crunchList;
  constructor(
    private cruncServ: CrunchListService,
    private cartServ: CartService,
    private route: ActivatedRoute,
    private apiServ: ApiService
  ) {
    this.route.params.subscribe(params => {
      this.apiServ.getACrunchy(params.id).subscribe(data => {
        this.crunch = data;
      });
    });
    this.crunchList = this.cruncServ.getCrunchList();
    this.apiServ.getCrunchies().subscribe(data => {
      this.crunchList = data;
    });
  }

  calcPrice(action) {
    this.crunch = this.cartServ.calcPrice(this.crunch, action);
  }

  addToCart(e, crunch) {
    console.log(e);
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

  addToCart(crunch) {
    console.log(crunch);
  }
}
