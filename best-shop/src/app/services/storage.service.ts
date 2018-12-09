import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

  addStorage(key, object) {
    sessionStorage.setItem(key, JSON.stringify(object));
    // localStorage.setItem(key, JSON.stringify(object));

  }

  takeStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
    // return JSON.parse(localStorage.getItem(key));

  }


}
