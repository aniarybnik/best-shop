import { Component, OnInit, Input} from '@angular/core';
import {Product} from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() products: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8443/api/product/list').subscribe(
        (result: Product[]) => {
          // console.debug(result);
            this.products = result.map((p: any) => {
              p['link'] = p.img;
              p['title'] = p.name;
              delete p.name;
              delete p.img;
               return p;
            });
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
        },
        (err) => {
          console.error(err);
        }
      );
  }


}
