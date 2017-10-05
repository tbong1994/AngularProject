import {Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {UserComponent} from './user.component';

@Component({
    selector: 'user-component'
})

@Injectable()
export class UserServiceComponent{

    constructor(public http:Http){}

    getUserInfo(username:string){
        const url = `/api/${username}`;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json() as UserComponent)
        .catch();
    }
}