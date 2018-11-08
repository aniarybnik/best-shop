import { BasketComponent } from './basket/basket.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShopComponent } from './shop/shop.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogowanieComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
