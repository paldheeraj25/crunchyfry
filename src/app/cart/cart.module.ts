import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    HomeModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
