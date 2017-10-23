import { Component, OnInit } from '@angular/core';

import { ReservationService,Reservation } from '../com_services/reservation.service';
import { CurrentUserService,CurrentUser } from '../com_services/currentuser.service';
@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  reservations:Reservation[]=[];
  selectedRoom:string="Breakout Room";
  currentUser:CurrentUser={};
  tmpReservations:Reservation[]=[];
  p:number=0;
  constructor(private svc:ReservationService,private currentuserService:CurrentUserService) { }
  
  ngOnInit() {
    this.getUser();
    this.getRecord();
  }

  private async getUser(){
    this.currentUser=await this.currentuserService.getAll();
  }

  public async getRecord(){
    this.reservations=await this.svc.getAll();
    this.reservations=await this.reservations.filter(x=>x.RoomName==this.selectedRoom && x.UserName!=null)
  }
}
