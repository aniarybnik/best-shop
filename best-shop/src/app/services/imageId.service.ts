import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageIdService {

  constructor() { }


  addIdx(product) {

    if ( product.count < product.link.length - 1 ) {
      return product.count += 1;
    } else {
      return product.count = 0;
    }

  }

}
