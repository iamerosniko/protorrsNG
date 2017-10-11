import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,NgxPaginationModule
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule { }
