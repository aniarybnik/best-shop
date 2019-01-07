import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { Rest } from './rest';

export interface LoginData {
  login;
  password;
}

export interface RegistrationData {
  login;
  name;
  lastName;
  password;
  role;
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

  roleUser () {
    return this.http.get(this.url + 'user/roles');
  }

  registrationUser (data: RegistrationData) {
    return this.http.post(this.url + 'user/add', data);
  }

  userAll () {
    return this.http.get(this.url + 'user/all');
  }

  removeUser (id) {
    console.debug(this.url + 'user/delete/' + id);
    return this.http.delete(this.url + 'user/delete/' + id);
  }

}



