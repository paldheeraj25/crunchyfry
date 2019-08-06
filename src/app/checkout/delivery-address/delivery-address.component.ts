import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  showDelSummary() {
    this.router.navigate(["/checkout/checkout-summary"]);
  }

}
