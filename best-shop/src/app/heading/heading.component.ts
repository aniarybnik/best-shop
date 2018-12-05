import { StorageService } from './../services/storage.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {


  // @Input() point;

  constructor(private router: Router,
              private storageService: StorageService) {}

  public item;
  currentUser;


  ngOnInit() {
      this.currentUser = this.storageService.takeStorage('user');
  }

  logOut() {
    sessionStorage.clear();
    // localStorage.clear();
    this.router.navigate(['../login']);
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
