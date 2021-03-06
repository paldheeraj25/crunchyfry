import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CrunchListService {
  list = [
    {
      id: "jacker-potato",
      name: "Jacker Potato Crisps",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      baseWeight: 100,
      rate: 1.2,
      price: 90,
      pricePer100gms: 90,
      cart: false
    },
    {
      id: "cornitoes-green-peas",
      name: "Cornitoes Coated Green Peas",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      baseWeight: 100,
      rate: 1.5,
      price: 110,
      pricePer100gms: 110,
      cart: false
    },
    {
      id: "neo-burger",
      name: "Neo Burger Chips",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      baseWeight: 100,
      rate: 1,
      price: 108,
      pricePer100gms: 108,
      cart: false
    },
    {
      id: "too-yum-multigrain",
      name: "Too Yumm Multigrain Chips",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      baseWeight: 100,
      rate: 1.05,
      price: 40,
      pricePer100gms: 40,
      cart: false
    }
  ];
  constructor() {}

  getCrunchList() {
    return this.list;
  }

  getACrunch(id) {
    return this.list.filter(item => item.id === id)[0];
  }

  setCrunchList(list) {
    this.list = list;
  }

  updateCrunchList(operation) {
    console.log(operation);
  }
}
