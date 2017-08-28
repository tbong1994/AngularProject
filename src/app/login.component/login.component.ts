import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
})

export class LoginComponent implements OnInit{
    
    constructor(private router: Router, private loginService: LoginServiceComponent, private route: ActivatedRoute ){
    }
    
    private token: string;
    public title = 'Welcome to the Tour of Harry Potter';
    private username:string;
    private password:string;

    ngOnInit(){
        
    }

    onLogInClick(username:string, password:string):void{
        this.username = username;
        this.password = password;
        this.token = this.loginService.getClientID();
        this.router.navigate(['/welcome']);
    }
    onCreateAnAccountClick(){
        this.loginService.login();
    }
}