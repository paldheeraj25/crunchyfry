import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CrunchDetailsComponent } from "./components/crunch-details/crunch-details.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: ":id/details",
    component: CrunchDetailsComponent
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: []
})
export class AppRoutingModule {}
