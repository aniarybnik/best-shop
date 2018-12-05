import { StorageService } from './../services/storage.service';
import { BasketComponent } from './../basket/basket.component';
import { BasketService } from './../services/basket.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from './product';
import { HttpClient } from '@angular/common/http';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() products: Product[];

  currentUser;
  userRole;

  constructor(private http: HttpClient,
              private productService: ProductService,
              private basketService: BasketService,
              private storageService: StorageService) { }

  ngOnInit() {

    this.currentUser = this.storageService.takeStorage('user');
    this.userRole = this.currentUser.role;

    if (this.userRole === 3) {

      this.productService.getProductSeller(this.currentUser.id).subscribe(
        (result: Product[]) => {
            this.products = result.map((p: any) => {

              p['link'] = p.img.toString().split(',');
              // console.debug(p.img.toString().split(','));
              p['title'] = p.name;
              p['count'] = 0;
              delete p.name;
              delete p.img;
              return p;
            });

        },
        (err) => {
          console.error(err);
        }
      );

    } else {
          this.productService.getProduct().subscribe(
            (result: Product[]) => {
                this.products = result.map((p: any) => {

                  p['link'] = p.img.toString().split(',');
                  // console.debug(p.img.toString().split(','));
                  p['title'] = p.name;
                  p['count'] = 0;
                  delete p.name;
                  delete p.img;
                  return p;
                });

            },
            (err) => {
              console.error(err);
            }
          );
          }


  }

  addProductToBasket(products: Product) {
    this.basketService.addToBasket('products', products);
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






    // this.http.get('http://localhost:8443/api/product/list').subscribe(
    //     (result: Product[]) => {
    //       // console.debug(result);
    //         this.products = result.map((p: any) => {
    //           p['link'] = p.img;
    //           p['title'] = p.name;
    //           delete p.name;
    //           delete p.img;
    //            return p;
    //         });

    //     },
    //     (err) => {
    //       console.error(err);
    //     }
    //   );


            // this.products = result.reduce((a: any, b: any, c: any) => {
            //   let t = {};
            //   Object.keys(b).forEach((key) => {
            //     if (key === 'img') {
            //       t['link'] = b[key];
            //     } else {
            //       t[key] = b[key];
            //     }
            //     a.push(t);
            //   });
            //   console.debug('a', a);
            //   console.debug('b', b);
            //   console.debug('c', c);
            //   return a;
            // }, []);
            // console.debug(this.products);
