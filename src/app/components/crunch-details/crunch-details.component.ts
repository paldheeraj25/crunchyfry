import { Component, OnInit } from "@angular/core";
import { CrunchListService } from "src/app/utils/crunch-list.service";
import { ActivatedRoute } from "@angular/router";

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
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crunch$ = this.cruncServ.getACrunch(params.id);
    });
    this.crunchList$ = this.cruncServ.getCrunchList();
  }
}
