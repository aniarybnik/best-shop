import { Component, OnInit, Input} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }


}
