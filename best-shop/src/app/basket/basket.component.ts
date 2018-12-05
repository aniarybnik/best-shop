import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productUser;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.productUser = this.storageService.takeStorage('arrayProduct');
  }

  addIdx(product) {

    if ( product.count < product.link.length - 1 ) {
        // console.debug('Licznik', product.count);
        // console.debug('ilosc zdjęć', product.link.length);
        return product.count += 1;
    } else {
        return product.count = 0;
    }

  }


}
