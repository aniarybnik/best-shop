import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productUser;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.productUser = this.storageService.takeStorage('arrayProduct');
  }



}
