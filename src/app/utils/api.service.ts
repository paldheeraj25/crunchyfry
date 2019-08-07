import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CartService } from "../components/cart/cart.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient, private cartServ: CartService) {}

  getCrunchies(): Observable<any> {
    const url = this.baseUrl + "crunchies";
    return this.http.get(url);
  }

  updateCrunch(crunch) {
    const url = `${this.baseUrl}crunchies/${crunch.id}`;
    return this.http.put(url, crunch);
  }
}
