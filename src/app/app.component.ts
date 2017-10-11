import { Component } from '@angular/core';
import { ApiService } from './com_services/api-service';
import { FormControl,FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private fb: FormBuilder){
  }
}