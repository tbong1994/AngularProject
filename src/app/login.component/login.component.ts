import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import * as auth0 from 'auth0-js';
import {ngbAlertConfig} from '../alert.component/alert.component';
import {AppService} from '../app.component.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
})

export class LoginComponent implements OnInit{
    
    constructor(private router: Router, private loginService: LoginServiceComponent, private route: ActivatedRoute, private authHttp: AuthHttp, private appService: AppService ){
    }
    
    private token: string;
    private username:string;
    private password:string;
    public isLoginValidated:boolean;
    public alert : ngbAlertConfig;
    ngOnInit(){
       
    }

    onLogInClick(username:string, password:string):void{
        // if(!this.isLoginValid(username, password)){ //if login is not valid
        //     this.isLoginValidated = false;
        //     this.appService.setIsAuthenticated(this.isLoginValidated);
        //     // this.alert = new ngbAlertConfig();
        //     // this.alert.alert.message = "Your username or password is incorrect";
        //     return;
        // }
        this.isLoginValidated = true;
        this.appService.setIsAuthenticated(this.isLoginValidated);
        this.username = username;
        this.password = password;
        this.token = this.loginService.getClientID();
    }
    
    onCreateAnAccountClick(){
        this.loginService.login();
    }

    public isLoginValid(username:string, password:string): boolean{
        if(username == '' || password == ''){return false;}
        this.loginService.isLoginValid(username, password);
    }
}