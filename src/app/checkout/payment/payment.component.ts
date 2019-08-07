import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../utils/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public paymentService: PaymentService) { }

  ngOnInit() {
  }

  redirectToPayment() {
    console.log("payment redirect function")
    // this.paymentService.createPayment("true").subscribe(res => {
    //   console.log(res);
    // })
  }
}
