import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { PaymentComponent } from "./payment/payment.component";
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { DeliverySummaryComponent } from './delivery-summary/delivery-summary.component';
import { PaymentService } from "../utils/payment.service";

@NgModule({
  imports: [CommonModule, CheckoutRoutingModule],
  declarations: [PaymentComponent, DeliveryAddressComponent, DeliverySummaryComponent],
  providers: [PaymentService]
})
export class CheckoutModule { }
