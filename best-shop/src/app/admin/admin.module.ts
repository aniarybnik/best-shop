import { AdminComponent } from "./admin/admin.component";
import { NgModule } from '@angular/core';
import { AdminRouting } from './admin.routing';
import { CommonModule } from "@angular/common";
import { MainPageComponent } from './admin/main-page/main-page.component';

@NgModule ({
  declarations: [
    AdminComponent,
    MainPageComponent,
  ],
  imports: [
    AdminRouting,
    CommonModule,
  ],

})

export class AdminModule { }
