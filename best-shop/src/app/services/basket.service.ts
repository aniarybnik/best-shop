import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  currentProduct;
  currentArray;
  basketCount;

  constructor(private storageService: StorageService) { }

 public basket = [];

  addToBasket(titleKey, product) {
    this.storageService.addStorage(titleKey, product);  // Dodanie produktu do sesji
    // this.currentProduct = this.storageService.takeStorage(titleKey);
    // this.basket.push(this.currentProduct);

    this.basket.push(product);
    this.addArrayProduct('arrayProduct', this.basket);

  }


  addArrayProduct(titleKey, array) {
    this.storageService.addStorage(titleKey, array);
    // this.currentArray = this.storageService.takeStorage(titleKey);

  }

  // zliczenie liczby produktow w koszyku
  get productsCount() {
    this.currentArray = this.storageService.takeStorage('arrayProduct');

    if (this.currentArray === null) {
      this.basketCount = 0;
    } else {
      this.basketCount = this.currentArray.length;
    }
    return this.basketCount;
  }

  removeProduct(product) {

    const productUser = this.storageService.takeStorage('arrayProduct');
    const index = productUser.findIndex((p) => p.id === product.id);
    if (index > -1) {
        productUser.splice(index, 1);
        this.basket.splice(index, 1);
   }
   this.storageService.addStorage('arrayProduct', productUser);
   return productUser;
  }

  buyAll() {
    this.storageService.addStorage('arrayProduct',  []);
    this.basket = [];
  }

}
