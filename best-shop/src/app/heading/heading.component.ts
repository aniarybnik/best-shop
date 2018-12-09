import { BasketService } from './../services/basket.service';
import { StorageService } from './../services/storage.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {


  constructor(private router: Router,
              private storageService: StorageService,
              private basketService: BasketService) {}

  public item;
  currentUser;
  userRole;
  // flagaSeller = true;
  // flagaUser = true;

  ngOnInit() {
      this.currentUser = this.storageService.takeStorage('user');
      this.userRole = this.currentUser.role;

      // if (this.userRole === 3) {
      //     this.flagaSeller = false;
      // }
      // if (this.userRole === 2) {
      //     this.flagaUser = false;
      // }

  }

  logOut() {
    sessionStorage.clear();
    // localStorage.clear();
    this.router.navigate(['../login']);
  }

  get productsCount() {
    return this.basketService.productsCount;
  }

}



  // addProduct() {
  //   this.router.navigate(['../container, addProduct']);
  // }

  // mainPage() {
  //   this.router.navigate(['../shop']);
  // }

    // basket() {
  //   this.router.navigate(['../basket']);
  // }
