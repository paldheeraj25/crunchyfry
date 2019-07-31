import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  crunchList = [
    {
      id: 1,
      name: "crunch one",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.2,
      price: 120
    },
    {
      id: 2,
      name: "crunch two",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.5,
      price: 150
    },
    {
      id: 3,
      name: "crunch three",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1,
      price: 100
    },
    {
      id: 4,
      name: "crunch four",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae?",
      weight: 100,
      rate: 1.05,
      price: 80
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  addWeight(index) {
    this.crunchList[index].weight = this.crunchList[index].weight + 100;
    this.crunchList[index].price = this.crunchList[index].weight * this.crunchList[index].rate
  }

  reduceWeight(index) {

    if (this.crunchList[index].weight > 0)
      this.crunchList[index].weight = this.crunchList[index].weight - 100;

    this.crunchList[index].price = this.crunchList[index].weight * this.crunchList[index].rate
  }

}
