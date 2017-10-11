import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  timeSlots=[
    {time:"10:00 - 10:30 AM"},
    {time:"10:30 - 11:00 AM"},
    {time:"11:00 - 11:30 AM"},
    {time:"11:30 - 12:00 PM"},
    {time:"1:00 - 1:30 PM"},
    {time:"1:30 - 2:00 PM"},
    {time:"2:00 - 2:30 PM"},
    {time:"2:30 - 3:00 PM"},
    {time:"3:00 - 3:30 PM"},
    {time:"3:30 - 4:00 PM"},
    {time:"4:00 - 4:30 PM"},
    {time:"4:30 - 5:00 PM"},
    {time:"5:00 - 5:30 PM"},
    {time:"5:30 - 6:00 PM"},
    {time:"6:00 - 6:30 PM"},
    {time:"6:30 - 7:00 PM"},
    {time:"7:00 - 7:30 PM"},
    {time:"7:30 - 8:00 PM"},
    {time:"8:00 - 8:30 PM"},
    {time:"8:30 - 9:00 PM"},
    {time:"9:00 - 9:30 PM"},
    {time:"9:30 - 10:00 PM"},
    {time:"10:00 - 10:30 PM"},
    {time:"10:30 - 11:00 PM"},
    {time:"11:00 - 11:30 PM"}
  ];
  p: number = 1;
  
  constructor() { }

  ngOnInit() {
  }

}
