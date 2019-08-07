import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
<<<<<<< HEAD
import { CrunchListService } from "../../utils/crunch-list.service";
=======
import { CartService } from "../cart/cart.service";
>>>>>>> 8be2c8660dc2ec78dd8c2a116406fd0b69dbc1e5

@Component({
  selector: "app-crunch-details",
  templateUrl: "./crunch-details.component.html",
  styleUrls: ["./crunch-details.component.scss"]
})
export class CrunchDetailsComponent implements OnInit {
  crunch$;
  weight = 100;
  crunchList$;
  constructor(
    private cruncServ: CrunchListService,
    private cartServ: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crunch$ = this.cruncServ.getACrunch(params.id);
    });
    this.crunchList$ = this.cruncServ.getCrunchList();
  }

  calcPrice(action) {
    this.crunch$ = this.cartServ.calcPrice(this.crunch$, action);
  }

  addToCart(crunch) {
    console.log(crunch);
  }
}
