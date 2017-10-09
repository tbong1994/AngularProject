
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {UserComponent} from '../user.component/user.component';

@Injectable()

export class SignUpServiceComponent{
    private headers = new Headers({'Content-type': 'application/json'});
    
    constructor(public http:Http){}

    public registerNewAccount( token: string, newUser: UserComponent): Promise<any>{
        const url =`/api/signup`;
        return this.http.post(url, JSON.stringify([token,newUser]), {headers: this.headers})
        .toPromise()
        .then()
        .catch();
    }
}