import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SignUpServiceComponent } from './signup.service.component';
import { UserComponent} from '../user.component/user.component';

@Component({
    selector: 'signup-component',
    templateUrl: './signup.component.html',
    styleUrls:['../login.component/login.component.css'],
})

export class SignUpComponent implements OnInit{

    ngOnInit(){

    }

    public isAccountInfoValid:boolean;
    public invalidUsernameDialog:string;

    constructor(public signupService: SignUpServiceComponent, public router:Router){

    }

    public onRegisterButtonClicked(username:string,password:string,firstname:string,lastname:string,email:string): void{
        this.validateNewAccount(username,password,firstname,lastname,email);
        const token = this.generateToken();
        let newUser = new UserComponent(username,password,firstname,lastname,email,token);
        this.signupService.registerNewAccount(newUser);
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

    public validateNewAccount(username:string,pw:string,fn:string,ln:string,email:string):boolean{
        if(username.length<5){this.generateInvalidInputDialog("username"); return false;}
    }

    public generateInvalidInputDialog(invalidInput:string):void{
        if(invalidInput=="username"){this.invalidUsernameDialog='Username should contain more than 5 characters';}
    }
    public onHomeClicked():void{
        this.router.navigate(['/login']);
    }
}
