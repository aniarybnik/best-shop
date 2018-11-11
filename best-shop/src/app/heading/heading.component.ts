import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  addProduct() {
    this.router.navigate(['../addproduct']);
  }

  mainPage() {
    this.router.navigate(['../shop']);
  }

  logOut() {
    this.router.navigate(['../login']);
  }

  basket() {
    this.router.navigate(['../basket']);
  }
}