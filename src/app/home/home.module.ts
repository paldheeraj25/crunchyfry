import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from "./../components/header/header.component";
import { HomeComponent } from "./home.component";
import { CrunchListComponent } from "../components/crunch-list/crunch-list.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CommonModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    CrunchListComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HomeModule { }
