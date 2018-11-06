 import { Product } from './../shop/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

   @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }

}
