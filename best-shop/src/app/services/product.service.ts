import { Injectable } from '@angular/core';
import { Rest } from './rest';
import { HttpClient } from '@angular/common/http';


export interface ProductData {
  name;
  price;
  tags;
  img;
  description;
  producer;
  userId;
}

@Injectable()
export class ProductService extends Rest {

  constructor(private http: HttpClient) {
    super();
  }

  addProduct(data: ProductData) {
    return this.http.post(this.url + 'product/add', data);
  }

  getProduct(userRole, userId) {

    if (userRole === 3) {
      return this.http.get(this.url + 'product/list/' + userId);

    } else {
      return this.http.get(this.url + 'product/list');
    }
  }

}
