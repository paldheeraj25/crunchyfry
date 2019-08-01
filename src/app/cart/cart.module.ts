import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HomeModule } from '../home/home.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    HomeModule
  ],
  declarations: [CartComponent, PaymentComponent]
})
export class CartModule { }
