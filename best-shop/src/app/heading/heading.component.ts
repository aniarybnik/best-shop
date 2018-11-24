import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor(private router: Router) { }

  public item;
  currentUser;

  ngOnInit() {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }


  // addProduct() {
  //   this.router.navigate(['../container, addProduct']);
  // }

  // mainPage() {
  //   this.router.navigate(['../shop']);
  // }

  logOut() {
    this.router.navigate(['../login']);
  }

  // basket() {
  //   this.router.navigate(['../basket']);
  // }
}
