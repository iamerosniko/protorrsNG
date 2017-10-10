import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = '';

    constructor(private http:Http){
        
    }
    
    public getAll(controller:string): Promise<any[]> {  
        console.log(controller);
        this.apiUrl=AppSettings.GETAPIURL(controller);
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }

    public getOne(controller:string,id:string): Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }  

    public postData(controller:string,data:any): Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL(controller);
        return this.http
          .post(this.apiUrl, JSON.stringify(data), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(AppSettings.handleError);
    }

    public putData(controller:string,data:any,id:string):Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .put(url, JSON.stringify(data), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }

    public deleteData(controller:string,id:string):Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }
}
