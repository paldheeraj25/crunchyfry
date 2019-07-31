import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CrunchListService {
  list = [
    {
      id: "crunch-one",
      name: "Crunch One",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.2,
      price: 120
    },
    {
      id: "crunch-two",
      name: "Crunch Two",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.5,
      price: 150
    },
    {
      id: "crunch-three",
      name: "Crunch Three",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1,
      price: 100
    },
    {
      id: "crunch-four",
      name: "Crunch Four",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.05,
      price: 80
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
