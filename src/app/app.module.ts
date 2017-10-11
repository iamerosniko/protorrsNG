import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { ApiService } from './com_services/api-service';

// import { UserService } from './com_services/user.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';  // <-- #1 import 
import { AppRouting } from './app.routing';

import { ReservationModule } from './reservation/reservation.module';
import { LoadItemsComponent } from './mod_common/load-items/load-items.component';
@NgModule({
  declarations: [
    AppComponent,LoadItemsComponent
  ],
  imports: [AppRouting,ReservationModule,
    ReactiveFormsModule,FormsModule,
    BrowserModule,HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
