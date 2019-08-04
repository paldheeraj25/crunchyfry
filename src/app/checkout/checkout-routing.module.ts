import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaymentComponent } from "./payment/payment.component";
import { DeliveryAddressComponent } from "./delivery-address/delivery-address.component";
import { DeliverySummaryComponent } from "./delivery-summary/delivery-summary.component";

const routes: Routes = [
  {
    path: "checkout-address",
    component: DeliveryAddressComponent
  },
  {
    path: "checkout-summary",
    component: DeliverySummaryComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
