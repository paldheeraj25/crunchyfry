import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private createPaymentUrl = "https://crunchyfy.com/api/prepare-payment";

  constructor(private httpClient: HttpClient) { }

  createPayment(paymentObject) {
    console.log("inside payment service create payment");
    return this.httpClient.post(this.createPaymentUrl, paymentObject).subscribe(res => {
      window.location.href = res['payment_request']['longurl'];
    });
  }

}
