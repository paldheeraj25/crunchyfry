import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';


import { HeaderComponent } from "./../components/header/header.component";
import { HomeComponent } from "./home.component";
import { CrunchListComponent } from "../components/crunch-list/crunch-list.component";

@NgModule({
  imports: [CommonModule,
    FormsModule
    ],
  declarations: [HeaderComponent,
    HomeComponent,
    CrunchListComponent]
})
export class HomeModule { }
