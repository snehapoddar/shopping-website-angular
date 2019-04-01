import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public mockProducts = [{
    img: 'assets/img/product/5.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  },
  {
    img: 'assets/img/product/6.jpg',
    price: '$35,00',
    name: 'Black and White Stripes Dress',
  },
  {
    img: 'assets/img/product/7.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  },
  {
    img: 'assets/img/product/8.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Topp',
  },{
    img: 'assets/img/product/9.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  },
  {
    img: 'assets/img/product/10.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  },
  {
    img: 'assets/img/product/11.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  },
  {
    img: 'assets/img/product/12.jpg',
    price: '$35,00',
    name: 'Flamboyant Pink Top',
  }];

  constructor() { }

  ngOnInit() {
  }

}
