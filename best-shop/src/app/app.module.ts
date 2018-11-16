import { AppRouting } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HeadingComponent } from './heading/heading.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BasketComponent } from './basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    ShopComponent,
    HeadingComponent,
    AddproductComponent,
    BasketComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
