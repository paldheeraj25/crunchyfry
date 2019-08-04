import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CrunchListComponent } from "../components/crunch-list/crunch-list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CrunchDetailsComponent } from "../components/crunch-details/crunch-details.component";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { CartComponent } from "../components/cart/cart.component";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, HomeRoutingModule],
  declarations: [
    HeaderComponent,
    CartComponent,
    HomeComponent,
    CrunchListComponent,
    FooterComponent,
    CrunchDetailsComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class HomeModule {}
