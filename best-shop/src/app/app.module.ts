import { NgxBoxComponent } from './ngx-box/ngx-box.component';
import { AppRouting } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HeadingComponent } from './heading/heading.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './addProduct/addProduct.component';
import { BasketComponent } from './basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserRestService } from './services/user-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    HeadingComponent,
    AddProductComponent,
    BasketComponent,
    RegistrationComponent,
    NgxBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatTooltipModule,
    ModalModule.forRoot()
  ],

  providers: [UserRestService],
  bootstrap: [AppComponent],
  entryComponents: [NgxBoxComponent]
})
export class AppModule { }
