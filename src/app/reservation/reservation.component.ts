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
  reservationMystery:Reservation={};
  reservationBreakout:Reservation={};
  p: number = 1;
  selectedTimeslot:number=0;
  selectedRoom:string="Breakout Room";
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
    this.reservationMystery=await this.reservations.find(x=>x.UserName==this.currentUser.UserName && x.RoomName=="Mystery Room");
    this.reservationBreakout=await this.reservations.find(x=>x.UserName==this.currentUser.UserName && x.RoomName=="Breakout Room");
    this.isAvailed=(this.reservationMystery!=null &&this.selectedRoom=="Mystery Room")||
      (this.reservationBreakout!=null &&this.selectedRoom=="Breakout Room");
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
      var boolConfirm=false;var diff=0;
      //computation
      if(this.reservationMystery!=null){
        diff = this.reservationMystery.ReservationID+25;
        boolConfirm=(diff==reservation.ReservationID)?
          confirm("You have reserved a room with same time with Mystery Room.\nContinue?"):
          confirm("This can not be undone!");
      }
      else if(this.reservationBreakout!=null){
        diff = this.reservationBreakout.ReservationID-25;
        boolConfirm=(diff==reservation.ReservationID)?
          confirm("You have reserved a room with same time with Breakout Room.\nContinue?"):
          confirm("This can not be undone!");
      }
      else{
        boolConfirm=confirm("This can not be undone!");
      }
      // if(this.reservation!=null){
      //   var a = this.reservation.ReservationID;
      //   var diff = (a>25)?reservation.ReservationID-25:reservation.ReservationID+25;

      //   var boolConfirm=confirm("you have")
      // }else{
      //   
      // }
      if(boolConfirm){
        reservation.UserName= await this.currentUser.UserName;
        reservation.Amount=250.00;
        await this.svc.put(reservation,reservation.ReservationID.toString());
        //refresh
        await this.getRecord();
      }
    }
  }
}
