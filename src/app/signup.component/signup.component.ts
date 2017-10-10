import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SignUpServiceComponent } from './signup.service.component';
import { UserComponent} from '../user.component/user.component';

@Component({
    selector: 'signup-component',
    templateUrl: './signup.component.html',
    styleUrls:['../login.component/login.component.css', './signup.component.css'],
})

export class SignUpComponent implements OnInit{

    ngOnInit(){
    }

    public isAccountInfoValid:boolean;
    public invalidUsernameTooltip:string;
    public invalidPwTooltip:string;
    public invalidEmailTooltip:string;
    public invalidFirstnameTooltip:string;
    public invalidlastnameTooltip:string;

    public isUsernameValid:boolean;
    public isPwValid:boolean;
    public isEmailValid:boolean;
    public isFnValid:boolean;
    public isLnValid:boolean;

    constructor(public signupService: SignUpServiceComponent, public router:Router){}

    public onRegisterButtonClicked(username:string,password:string,firstname:string,lastname:string,email:string): void{
        if(this.validateNewAccount(username,password,firstname,lastname,email)){
            const token = this.signupService.generateToken();
            let newUser = new UserComponent(username,password,firstname,lastname,email);
            this.signupService.registerNewAccount(token,newUser)
            .then( res =>{
                /*TODO: naviagte user to welcome page */
            });
        }
    }
    public validateNewAccount(username:string,pw:string,fn:string,ln:string,email:string):boolean{
        this.isUsernameValid = this.signupService.checkNewUserUsername(username);
        this.isPwValid = this.signupService.checkNewUserPassword(pw);
        this.isFnValid = this.signupService.checkNewUserFirstName(fn);
        this.isLnValid = this.signupService.checkNewUserLastName(ln);
        this.isEmailValid = this.signupService.checkNewUserEmail(email);

        return this.isUsernameValid&&this.isPwValid&&this.isFnValid&&this.isLnValid&&this.isEmailValid;
    }
    public onHomeClicked():void{
        this.router.navigate(['/login']);
    }
}
