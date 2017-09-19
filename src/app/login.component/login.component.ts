import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import * as auth0 from 'auth0-js';
import {ngbAlertConfig} from '../alert.component/alert.component';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
})

export class LoginComponent implements OnInit{
    
    constructor(private router: Router, private loginService: LoginServiceComponent, private route: ActivatedRoute, private authHttp: AuthHttp ){
    }
    
    private token: string;
    private username:string;
    private password:string;

    public title = 'Welcome to the Tour of Harry Potter';
    public isLoginValidated:boolean;
    public alert : ngbAlertConfig;
    ngOnInit(){
       
    }

    onLogInClick(username:string, password:string):void{
        var some = this.isLoginValid(username,password);
        if(this.isLoginValid(username, password)){ //if login is not valid
            this.isLoginValidated = false;
            // this.alert = new ngbAlertConfig();
            // this.alert.alert.message = "Your username or password is incorrect";
            return;
        }
        this.isLoginValidated = true;
        this.username = username;
        this.password = password;
        this.token = this.loginService.getClientID();
        this.router.navigate(['/welcome']);
    }
    
    onCreateAnAccountClick(){
        this.loginService.login();
    }

    public isLoginValid(username:string, password:string): boolean{
        if(username == '' || password == ''){return false;}
        this.loginService.isLoginValid(username, password);
        var d = console.log(this.loginService.isAuthenticated());
        return this.loginService.isAuthenticated();
    }
}