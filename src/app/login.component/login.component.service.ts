import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Headers, Http } from '@angular/http';
import { UserComponent } from '../user.component/user.component';

@Injectable()
export class LoginServiceComponent {

  private wizardsUrl = '/api'; //relative url to node project ng build creates the dist folder and default url is 'localhost:3000'
  private headers = new Headers({'Content-type': 'application/json'});
  public isValid: boolean = false;

  constructor(public router: Router, public http: Http) {}

  public isLoginValid(username:string, password:string) : Promise<UserComponent>{
    // let loginCredentials = JSON.stringify({username, password});
    let loginCredentials = {username,password};
    // const url = `${this.wizardsUrl}/login/${username}/${password}`;
    const url = `/api/login/${username}/${password}`;
    return this.http.post(url, loginCredentials, {headers: this.headers})
    .toPromise()
    .then(response => response.json() as UserComponent)
    .catch();
  }
}