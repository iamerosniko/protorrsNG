import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReservationService } from '../com_services/reservation.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,NgxPaginationModule,FormsModule
  ],
  providers:[ReservationService],
  declarations: [ReservationComponent]
})
export class ReservationModule { }
