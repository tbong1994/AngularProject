import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponentService } from './login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
    providers:[LoginComponentService]
})

export class LoginComponent implements OnInit{
    
    constructor(private router: Router, private loginService: LoginComponentService, private route: ActivatedRoute ){}
    
    private token: string;
    public title = 'Welcome to the Tour of Harry Potter';

    ngOnInit(){
        
    }

    onLogInClick():void{
        this.token = this.loginService.getClientID();
        this.router.navigate(['/welcome']);
    }
}