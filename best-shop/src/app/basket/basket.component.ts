import { Component, OnInit } from '@angular/core';

import { BasketService } from './../services/basket.service';
import { ImageIdService } from './../services/imageId.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productUser;
  sumProduct: Number = 0;
  macierzUser = [];
  listOfSeller;
  sumList;
  // indexProtuctToRemove;
  sumMatrix;

  constructor(private storageService: StorageService,
              private basketService: BasketService,
              private imageIdService: ImageIdService) { }

  public ngOnInit() {
     this.productUser = this.storageService.takeStorage('arrayProduct');
     console.debug(this.productUser);

     // posortowanie produktow wedlug sprzedawcow
     this.productUser.sort((a, b) => a.seller < b.seller ? -1 : a.seller > b.seller ? 1 : 0);
      this.listOfSeller = [];

     // Lista sprzedawcow -> unikalne wartosci, gdy się powtarza sprzedawca wpisujemy go tylko raz

     this.productUser.forEach((p) => {
       if (this.listOfSeller.indexOf(p.seller) === -1) {
          this.listOfSeller.push(p.seller);
       }
      });

      // Macierz z sumami każdego z sprzedawcy
      this.sumMatrix = [];
      let price = 0;

      // Sumowanie produktow
      this.listOfSeller.forEach((u) => {
        this.productUser.forEach(p => {
          if (u === p.seller) {
            price += p.price;
          }
        });
        this.sumMatrix.push(price);
        price = 0;
       });

      //  console.debug(this.sumMatrix);
     this.sumProduct = 0;

    // Suma calosciowa
     if (this.productUser === null || this.productUser.length === 0) {
      this.sumProduct = 0;
     } else {
        for (let i = 0; i <= this.productUser.length - 1; i++) {
          const zmienna = (this.productUser[i].price);
          this.sumProduct += zmienna;
        }
     }
  }

  addIdx(product) {
    this.imageIdService.addIdx(product);
  }



  removeProduct(product) {
    this.productUser = this.basketService.removeProduct(product);
    this.ngOnInit();
  }


// Kupienie porduktow od danego sprzedawcy ..... nie dziala poki co  :(

  // buyProducts(sellerName) {
  //   this.indexProtuctToRemove = [];
  //   // indexy produktow kupionych

  //   this.productUser.forEach((p) => {
  //     if (p.seller === sellerName) {
  //        this.indexProtuctToRemove.push(p.id);
  //     }
  //    });

  //    // usuwanie produktow kupionych

  // }


  // Kupienie wszystkich produktow skutkuje usunięciem wszystkich produktow z koszyka
  buyAll() {
    this.basketService.buyAll();
    this.productUser = [];
    this.sumProduct = 0;
    this.listOfSeller = [];
  }

}
