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
  sumProduct: Number = 0;



  constructor(private storageService: StorageService,
              private basketService: BasketService,
              private imageIdService: ImageIdService) { }

  public ngOnInit() {
     this.productUser = this.storageService.takeStorage('arrayProduct');
     this.sumProduct = 0;


     if (this.productUser === null || this.productUser.length === 0) {
      this.sumProduct = 0;
     } else {
        for (let i = 0; i <= this.productUser.length - 1; i++) {
          const zmienna = (this.productUser[i].price);
          console.debug(zmienna);
          this.sumProduct += zmienna;
          // this.sumProduct = this.productUser[i].price;
        }
     }
  }

  addIdx(product) {
    this.imageIdService.addIdx(product);
  }



  removeProduct(product) {
    this.productUser = this.basketService.removeProduct(product);
    // console.debug(this.productUser);
    this.ngOnInit();
  }

  buyAll() {
    this.productUser = [];
    this.storageService.addStorage('arrayProduct',  this.productUser);
    this.sumProduct = 0;
  }

}
