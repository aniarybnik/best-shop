import { UserModule } from './sheredModule/user.module';
import { ImageIdService } from './services/imageId.service';
import { InterceptorService } from './services/interceptor';
import { BasketService } from './services/basket.service';
import { StorageService } from './services/storage.service';
import { ModalService } from './services/modal.service';
import { NgxBoxComponent } from './ngx-box/ngx-box.component';
import { AppRouting } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HeadingComponent } from './heading/heading.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddProductComponent } from './addProduct/addProduct.component';
import { BasketComponent } from './basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RegistrationComponent } from './registration/registration.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserRestService } from './services/user-rest.service';
import { ContainerComponent } from './container/container.component';
import { ProductService } from './services/product.service';
import { AdminComponent } from './admin/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    HeadingComponent,
    AddProductComponent,
    BasketComponent,
    // RegistrationComponent,
    NgxBoxComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    UserModule
  ],

  providers: [UserRestService,
              ProductService,
              ModalService,
              StorageService,
              BasketService,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: InterceptorService,
              multi: true
            },
            ImageIdService],
  bootstrap: [AppComponent],
  entryComponents: [NgxBoxComponent]
})
export class AppModule { }
