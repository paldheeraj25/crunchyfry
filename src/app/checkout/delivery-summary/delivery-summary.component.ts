import { Component, OnInit } from '@angular/core';
import { CrunchListService } from '../../utils/crunch-list.service';


@Component({
  selector: 'app-delivery-summary',
  templateUrl: './delivery-summary.component.html',
  styleUrls: ['./delivery-summary.component.scss']
})
export class DeliverySummaryComponent implements OnInit {

  carts$ = [];
  constructor(private crunchListServ: CrunchListService) {
    this.carts$ = this.crunchListServ.getCrunchList();
  }

  ngOnInit() {
  }

}
