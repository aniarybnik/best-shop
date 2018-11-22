import { RegistrationComponent } from './registration/registration.component';
import { BasketComponent } from './basket/basket.component';
import { AddProductComponent } from './addProduct/addProduct.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
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
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
