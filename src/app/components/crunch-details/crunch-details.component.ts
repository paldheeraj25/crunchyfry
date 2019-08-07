import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrunchListService } from "../../utils/crunch-list.service";

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crunch$ = this.cruncServ.getACrunch(params.id);
    });
    this.crunchList$ = this.cruncServ.getCrunchList();
  }

  calcPrice(action) {
    const weight = this.crunch$.weight;
    this.crunch$.weight = action === "plus" ? weight + 10 : weight - 10;
    this.crunch$.price =
      this.crunch$.pricePer100gms * (this.crunch$.weight / 100);
  }

  addToCart(crunch) {
    console.log(crunch);
  }
}
