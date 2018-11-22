import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { Rest } from './rest';

export interface LoginData {
  login;
  password;
}

@Injectable()
export class UserRestService extends Rest {

  constructor(private http: HttpClient) {
    super();
   }
  login(data: LoginData) {

    return this.http.post(this.url + 'user/login', data);
    // return this.http.post(`${this.url}user/login`, data);
  }
}



