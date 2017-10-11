import { Component, OnInit } from '@angular/core';

import { ReservationService,Reservation } from '../com_services/reservation.service';
import { CurrentUserService,CurrentUser } from '../com_services/currentuser.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations:Reservation[]=[];
  tmpReservations:Reservation[]=[];
  reservation:Reservation={};
  p: number = 1;
  selectedTimeslot:number=0;
  selectedRoom:string="Mystery Room";
  currentUser:CurrentUser={};
  isAvailed:boolean=false;
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
    await this.filterRoom();
  }

  private async filterRoom(){
    this.selectedTimeslot=0;
    this.tmpReservations=await this.reservations.filter(x=>x.RoomName==this.selectedRoom && x.UserName==null);
    this.changeTimeslot();
    this.check();
  }

  private async changeTimeslot(){
    for (var i=0;i<this.tmpReservations.length;i++){
      this.tmpReservations[i].Players=0;
      this.tmpReservations[i].TeamName=null;
    }
  }

  private async check(){
    this.reservation=await this.reservations.find(x=>x.UserName==this.currentUser.UserName && x.RoomName==this.selectedRoom);
    this.isAvailed=this.reservation!=null;
  }

  private async submit(reservation:Reservation){
    console.log(reservation);
    if(reservation.TeamName==null||reservation.TeamName==""){
      alert("Team Name is required");
    }
    else if (reservation.Players==0){
      alert("# of Players is required");
    }
    else{
      //computation
      var boolConfirm=confirm("This can not be undone!");
      if(boolConfirm){
        reservation.UserName= await this.currentUser.UserName;
        reservation.Amount=200.00;
        await this.svc.put(reservation,reservation.ReservationID.toString());
        //refresh
        await this.getRecord();
      }
    }
  }
}
