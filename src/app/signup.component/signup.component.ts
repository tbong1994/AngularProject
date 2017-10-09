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
    public invalidUsernameDialog:string;
    public invalidPwDialog:string;
    public invalidEmailDialog:string;
    public invalidFirstnameDialog:string;
    public invalidlastnameDialog:string;
    public invalidUsername:boolean;
    public invalidPassword:boolean;
    public invalidEmail:boolean;
    public invalidFirstName:boolean;
    public invalidLastName:boolean;

    constructor(public signupService: SignUpServiceComponent, public router:Router){}

    public onRegisterButtonClicked(username:string,password:string,firstname:string,lastname:string,email:string): void{
        if(this.validateNewAccount(username,password,firstname,lastname,email)){
            const token = this.generateToken();
            let newUser = new UserComponent(username,password,firstname,lastname,email);
            this.signupService.registerNewAccount(token,newUser)
            .then( res =>{
                /*TODO: naviagte user to welcome page */
            });
        }
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
        let isValid = true;
        if(username.length<5){ isValid=this.generateInvalidInputDialog("username");}
        if(pw.length<5){ isValid=this.generateInvalidInputDialog("pw");}
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){ isValid=this.generateInvalidInputDialog("email");}
        if(fn.length<2){
            isValid=this.generateInvalidInputDialog('fn');
        }
        if(ln.length <2){
            isValid=this.generateInvalidInputDialog('ln');
        }
        return isValid;
    }

    public generateInvalidInputDialog(invalidInput:string):boolean{
        if(invalidInput=="username"){
            this.invalidUsernameDialog='Username should contain more than 5 characters';
            this.invalidUsername = true;
        }
        if(invalidInput=="pw"){
            this.invalidPwDialog='Password should contain more than 5 characters';
            this.invalidPassword=true;
        }
        if(invalidInput=="email"){
            this.invalidEmailDialog='Email must be in the form of abc@youremail.com';
            this.invalidEmail= true;
        }
        if(invalidInput=='fn'){
            this.invalidFirstName = true;
        }
        if(invalidInput=='ln'){
            this.invalidLastName = true;
        }
        return false;
    }
    public onHomeClicked():void{
        this.router.navigate(['/login']);
    }
}
