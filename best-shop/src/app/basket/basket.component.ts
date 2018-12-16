import { ImageIdService } from './../services/imageId.service';
import { Component, OnInit } from '@angular/core';

import { BasketService } from './../services/basket.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productUser;
  // proba;



  constructor(private storageService: StorageService,
              private basketService: BasketService,
              private imageIdService: ImageIdService) { }

  ngOnInit() {
     this.productUser = this.storageService.takeStorage('arrayProduct');
  }

  addIdx(product) {
    this.imageIdService.addIdx(product);
  }



  removeProduct(product) {
    this.productUser = this.basketService.removeProduct(product);
    // console.debug(this.productUser);

  }


}
