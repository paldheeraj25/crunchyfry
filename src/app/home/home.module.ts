import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./../components/header/header.component";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, HomeComponent]
})
export class HomeModule {}
