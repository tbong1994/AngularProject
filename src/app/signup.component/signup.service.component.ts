
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
        return this.http.post(url, JSON.stringify({'token':token, 'user':newUser}), {headers: this.headers})
        .toPromise()
        .then()
        .catch();
    }

    public checkNewUserUsername(username:string){
        if(username.length<5 || username.length > 15){return false;}
        return true;
    }
    public checkNewUserPassword(pw:string){
        if(pw.length<5 || pw.length > 15){return false;}
        return true;
    }
    public checkNewUserFirstName(fn:string){
        if(fn.length < 3){return false;}
        return true;
    }
    public checkNewUserLastName(ln:string){
        if(ln.length < 3){return false;}
        return true;
    }
    public checkNewUserEmail(email:string){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){return false;}
        return true;
    }
    public generateToken(): string{
        let token = '';
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        for(var i =0; i<10;i++){
          if(i==3 || i==7 || i== 9){
            token += Math.floor(Math.random()*(9-1) + 1);
            continue;
          }
          token += alphabets.charAt(Math.floor(Math.random()* alphabets.length));
        }
        return token;
    }

}