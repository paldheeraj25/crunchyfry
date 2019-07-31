import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { CrunchListComponent } from "../components/crunch-list/crunch-list.component";
import { CrunchDetailsComponent } from "../components/crunch-details/crunch-details.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomeComponent, CrunchListComponent, CrunchDetailsComponent]
})
export class HomeModule {}
