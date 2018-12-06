import { Product } from './../shop/product';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  currentProduct;
  currentArray;

  constructor(private storageService: StorageService) { }

 public basket = [];

  addToBasket(titleKey, product) {
    this.storageService.addStorage(titleKey, product);
    this.currentProduct = this.storageService.takeStorage(titleKey);
    this.basket.push(this.currentProduct);

    this.addArrayProduct('arrayProduct', this.basket);

    // console.debug(this.basket);
  }


  addArrayProduct(titleKey, array) {
    this.storageService.addStorage(titleKey, array);
    this.currentArray = this.storageService.takeStorage(titleKey);

  }

  get productsCount() {
    return this.basket.length;
  }

}
