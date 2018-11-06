import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HeadingComponent } from './heading/heading.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    ShopComponent,
    HeadingComponent,
    AddbuttonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
