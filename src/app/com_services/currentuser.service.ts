import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApiService } from './api-service';

export interface CurrentUser{
    id ?:number,
    UserName ?: string,
}

@Injectable()
export class CurrentUserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'currentuser';
    private apiUrl = '';

    constructor(private http:Http,private api:ApiService){
        
    }
    
    public getAll(): Promise<any> {  
        this.apiUrl=AppSettings.GETAPIURL(this.controller);
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }

}
