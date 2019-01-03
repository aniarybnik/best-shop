import { ContainerComponent } from './container/container.component';
import { RegistrationComponent } from './registration/registration.component';
import { BasketComponent } from './basket/basket.component';
import { AddProductComponent } from './addProduct/addProduct.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { container } from '@angular/core/src/render3/instructions';


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
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'  
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'container',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: ShopComponent
      },
      {
        path: 'addProduct',

        component: AddProductComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      }]
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
