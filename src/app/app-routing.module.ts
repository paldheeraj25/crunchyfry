import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CrunchDetailsComponent } from "./components/crunch-details/crunch-details.component";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "user",
    loadChildren: "./checkout/checkout.module#CheckoutModule"
  },
  {
    path: ":id/details",
    component: CrunchDetailsComponent
  },
  {
    path: "checkout",
    loadChildren: "./checkout/checkout.module#CheckoutModule"
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })],
  declarations: []
})
export class AppRoutingModule { }
