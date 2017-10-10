import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApiService } from './api-service';

export interface Users{
    UserID?:number,
    UserName ?: string,
    UserFirstName ?: string,
    UserLastName ?: string,
    UserMiddleName ?: string,
    IsActive ?: boolean
}

@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'Users';

    constructor(private http:Http,private api:ApiService){
        
    }
    
    public async getAll(){
        return await this.api.getAll(this.controller);
    }

    public async getOne(id:string){
        return await this.api.getOne(this.controller,id);
    }

    public async post(data:any){
        return await this.api.postData(this.controller,data);
    }

    public async put(data:any,id:string){
        return await this.api.putData(this.controller,data,id);
    }

    public async delete(id:string){
        return await this.api.deleteData(this.controller,id);
    }

    configure(settings: Users) : void {
        Object.assign(this, settings);
    }
}
