import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CrunchListService {
  list = [
    {
      id: "jacker-potato",
      name: "Jacker Potato Crisps, Hot and crispy flavour",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      baseWeight: 100,
      rate: 1.2,
      price: 90,
      pricePer100gms: 90
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
      pricePer100gms: 110
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
      pricePer100gms: 108
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
      pricePer100gms: 40
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
