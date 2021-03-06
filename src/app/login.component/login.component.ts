import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {AppService} from '../app.component.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
})

export class LoginComponent implements OnInit{
    
    constructor(private router: Router, private loginService: LoginServiceComponent, private route: ActivatedRoute,private appService:AppService ){
    }
    
    public token: string;
    public username:string;
    private password:string;
    public isLoginValidated:boolean;
    ngOnInit(){
       
    }

    onLoginClick(username:string, password:string):void {
        this.isLoginValid(username, password);
    }

    onSignUpClicked():void{
        console.log('signup clicked');
        this.router.navigate(['/signup']);
    }
    authenticated(username:string, password:string):void{
        this.isLoginValidated = true;
        this.appService.setIsAuthenticated(this.isLoginValidated);
        this.username = username;
        this.password = password;
        this.router.navigate(['/welcome', username]);
    }
    
    failLogIn(): void{
        this.isLoginValidated =false;
    }

    isLoginValid(username:string, password:string): void{
        let isAuthenticated = false;
        if(username == '' || password == ''){this.failLogIn(); return;}
        this.username = username;
        this.loginService.isLoginValid(username, password).then(res => res[0] ? this.authenticated(username,password) : this.failLogIn());
    }
}