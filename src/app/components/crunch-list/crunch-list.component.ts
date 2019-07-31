import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CrunchListService } from "src/app/utils/crunch-list.service";

@Component({
  selector: "app-crunch-list",
  templateUrl: "./crunch-list.component.html",
  styleUrls: ["./crunch-list.component.scss"]
})
export class CrunchListComponent implements OnInit {
  crunchList: any;

  constructor(private router: Router, private crunchsServ: CrunchListService) {}

  ngOnInit() {
    this.crunchList = this.crunchsServ.getCrunchList();
  }

  addToCart(crunch) {
    console.log(crunch);
  }

  addWeight(index) {
    this.crunchList[index].weight = this.crunchList[index].weight + 100;
    this.crunchList[index].price =
      this.crunchList[index].weight * this.crunchList[index].rate;
  }

  reduceWeight(index) {
    if (this.crunchList[index].weight > 0)
      this.crunchList[index].weight = this.crunchList[index].weight - 100;

    this.crunchList[index].price =
      this.crunchList[index].weight * this.crunchList[index].rate;
  }

  detailsView(crunch) {
    this.router.navigate([crunch.id, "details"]);
  }
}
