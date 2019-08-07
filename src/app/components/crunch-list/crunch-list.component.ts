import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CrunchListService } from "src/app/utils/crunch-list.service";
import { CartService } from "../cart/cart.service";

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
    private crunchsServ: CrunchListService,
    private cartServ: CartService
  ) {}

  ngOnInit() {
    this.crunchList = this.crunchsServ.getCrunchList();
  }

  addToCart(e, crunch) {
    e.stopPropagation();
    this.cartServ.getState().subscribe(state => {
      this.state = state;
    });
    crunch.cart = true;
    this.state.items.push(crunch);
  }

  addWeight(e, index) {
    e.stopPropagation();
    this.crunchList[index].weight = this.crunchList[index].weight + 100;
    this.crunchList[index].price =
      this.crunchList[index].weight * this.crunchList[index].rate;
  }

  reduceWeight(e, index) {
    e.stopPropagation();
    if (this.crunchList[index].weight > 0)
      this.crunchList[index].weight = this.crunchList[index].weight - 100;

    this.crunchList[index].price =
      this.crunchList[index].weight * this.crunchList[index].rate;
  }

  detailsView(crunch) {
    this.router.navigate([crunch.id, "details"]);
  }
}
