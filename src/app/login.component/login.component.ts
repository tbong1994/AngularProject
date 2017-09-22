import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import * as auth0 from 'auth0-js';
<<<<<<< HEAD
=======
import {ngbAlertConfig} from '../alert.component/alert.component';
import {AppService} from '../app.component.service';
>>>>>>> 78cd590c8d0a1894e96a62336be77a3d9a5453a0

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
    ngOnInit(){
       
    }

    onLogInClick(username:string, password:string):void{
<<<<<<< HEAD
        if(!this.isLoginValid(username, password)){ //if login is not valid
            this.isLoginValidated = false;
            return;
        }
=======
        // if(!this.isLoginValid(username, password)){ //if login is not valid
        //     this.isLoginValidated = false;
        //     this.appService.setIsAuthenticated(this.isLoginValidated);
        //     // this.alert = new ngbAlertConfig();
        //     // this.alert.alert.message = "Your username or password is incorrect";
        //     return;
        // }
>>>>>>> 78cd590c8d0a1894e96a62336be77a3d9a5453a0
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