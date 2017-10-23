import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { ApiService } from './com_services/api-service';

import {NgxPaginationModule} from 'ngx-pagination';
// import { UserService } from './com_services/user.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';  // <-- #1 import 
import { AppRouting } from './app.routing';

import { ReservationModule } from './reservation/reservation.module';
import { LoadItemsComponent } from './mod_common/load-items/load-items.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
@NgModule({
  declarations: [
    AppComponent,LoadItemsComponent, RegisteredUsersComponent
  ],
  imports: [AppRouting,ReservationModule,NgxPaginationModule,
    ReactiveFormsModule,FormsModule,
    BrowserModule,HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
