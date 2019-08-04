import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(public router: Router) {}
  toggleCart = false;

  goToHome() {
    this.router.navigate(["home"]);
  }

  showCart() {
    this.toggleCart = true;
  }

  onUnsetCart() {
    this.toggleCart = false;
  }
}
