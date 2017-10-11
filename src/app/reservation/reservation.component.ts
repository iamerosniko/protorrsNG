import { Component, OnInit } from '@angular/core';

import { ReservationService,Reservation } from '../com_services/reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations:Reservation[]=[];
  p: number = 1;
  selectedTimeslot:number=0;
  
  constructor(private svc:ReservationService) { }

  ngOnInit() {
    this.getRecord();
  }

  private async getRecord(){
    this.reservations=await this.svc.getAll();
  }
}
