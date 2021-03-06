import { UserRestService } from './../services/user-rest.service';
import { UserModule } from './../sheredModule/user.module';
import { AdminComponent } from "./admin/admin.component";
import { NgModule } from '@angular/core';
import { AdminRouting } from './admin.routing';
import { CommonModule } from "@angular/common";
import { MainPageComponent } from './admin/main-page/main-page.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

@NgModule ({
  declarations: [
    AdminComponent,
    MainPageComponent,
    UsersListComponent,
  ],
  imports: [
    AdminRouting,
    CommonModule,
    UserModule
  ],
  providers: [UserRestService]

})

export class AdminModule { }
