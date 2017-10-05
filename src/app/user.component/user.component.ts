import{Component} from '@angular/core';

@Component({
    selector:'usercomponent',
    template:'',
})

export class UserComponent{

    public username:string;
    public password:string;
    public firstname:string;
    public lastname:string;
    public email:string;
    public token:string;
    constructor(username:string,firstname:string,lastname:string){
        this.username =username;
        this.firstname= firstname;
        this.lastname =lastname;
    }

}
