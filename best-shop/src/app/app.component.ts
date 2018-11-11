import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from './shop/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'best-shop';
  products: Product [];

  constructor(private fb: FormBuilder) {
    // this.products = [
    //   new Product('Bakuś saszetka', 'https://bakoma.pl/wp-content/uploads/Baku%C5%9B_saszetka-waniliowa-200x200.png', 'Naturalne składniki', 4),
    //   new Product('Batonik 7 zbóż', 'https://bakoma.pl/wp-content/uploads/7zboz_baton_brzoskwinia-200x200.png', 'Naturalne składniki', 3),
    //   new Product('Jogurt BIO', 'https://bakoma.pl/wp-content/uploads/bio_truskawka_370x370-200x200.png', 'Naturalne składniki', 10)
    // ];
  }

}
