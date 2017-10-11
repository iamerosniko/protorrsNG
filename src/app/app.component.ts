import { Component } from '@angular/core';
import { ApplicationGroupModules } from './com_entities/entities';
import { ApiService } from './com_services/api-service';
// import { UserService,Users } from './com_services/user.service';
import { FormControl,FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserEntity } from  './com_entities/entities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  
  appModules:ApplicationGroupModules;
  constructor(private fb: FormBuilder){
  }
}