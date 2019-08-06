import { Component, OnInit } from "@angular/core";
import { CrunchListService } from "src/app/utils/crunch-list.service";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart/cart.service";

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
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crunch$ = this.cruncServ.getACrunch(params.id);
    });
    this.crunchList$ = this.cruncServ.getCrunchList();
  }

  calcPrice(action) {
    this.cartServ.updateMessage("Hello! from crunch details component");
    this.crunch$ = this.cartServ.calcPrice(this.crunch$, action);
  }
}
