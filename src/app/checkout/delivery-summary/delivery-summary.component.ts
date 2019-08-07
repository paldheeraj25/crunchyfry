import { Component, OnInit } from '@angular/core';
import { CrunchListService } from '../../utils/crunch-list.service';
import { PaymentService } from '../../utils/payment.service';


@Component({
  selector: 'app-delivery-summary',
  templateUrl: './delivery-summary.component.html',
  styleUrls: ['./delivery-summary.component.scss']
})
export class DeliverySummaryComponent implements OnInit {

  carts$ = [];
  deliveryCharge: any;
  totalPrice: any;
  orderObject = {
    "purpose": "Shopping",
    "amount": "225",
    "buyer_name": "Dheeraj pal",
    "redirect_url": "http://localhost:4200/shop/payment-notice",
    "email": "paldhereaj25@gmail.com",
    "phone": "9885065575",
    "send_email": false,
    "webhook": "http://pinnacle.lewiot.com:5012/api/instamojo/webhook",
    "send_sms": false,
    "allow_repeated_payments": false
  }
  constructor(private crunchListServ: CrunchListService, public paymentService: PaymentService) {
    this.carts$ = this.crunchListServ.getCrunchList();
  }

  ngOnInit() {
  }

  redirectToPayment() {
    this.paymentService.createPayment(this.orderObject);
  }
}
