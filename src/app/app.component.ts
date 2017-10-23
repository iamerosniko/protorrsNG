import { Component } from '@angular/core';
import { ApiService } from './com_services/api-service';
import { FormControl,FormBuilder, FormGroup,Validators } from '@angular/forms';

import { CurrentUserService,CurrentUser } from './com_services/currentuser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentUser:CurrentUser={};
  constructor(private fb: FormBuilder,private currentuserService:CurrentUserService){
    this.getUser();
  }

  private async getUser(){
    this.currentUser=await this.currentuserService.getAll();
  }

  isAdmin():boolean{
    return  (this.currentUser.UserName=='alverer'||this.currentUser.UserName=='rex_de_sur'||this.currentUser.UserName=='quibujo')
  }
}