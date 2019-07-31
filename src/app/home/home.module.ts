import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CrunchListComponent } from "../components/crunch-list/crunch-list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CrunchDetailsComponent } from "../components/crunch-details/crunch-details.component";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, HomeRoutingModule],
  declarations: [HomeComponent, CrunchListComponent, CrunchDetailsComponent]
})
export class HomeModule {}
