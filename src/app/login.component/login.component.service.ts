import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Headers, Http } from '@angular/http';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginServiceComponent {

  private wizardsUrl = '/api'; //relative url to node project ng build creates the dist folder and default url is 'localhost:3000'
  private headers = new Headers({'Content-type': 'application/json'});
  public isValid: boolean = false;

  auth0 = new auth0.WebAuth({
    clientID: 'gcN4GpyJhPL3655VpH2oSURaHFO5ZU7h',
    domain: 'tbong1994.auth0.com',
    responseType: 'token id_token',
    audience: 'https://tbong1994.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/welcome',
    scope: 'openid'
  });

  constructor(public router: Router, public http: Http) {}

  public login(): void {
    this.auth0.authorize();
  }
  
  public getClientID(): string{
      return this.auth0.clientID;
  }

  public isLoginValid(username:string, password:string) : Promise<LoginComponent>{
    // let loginCredentials = JSON.stringify({username, password});
    let loginCredentials = {username,password};
    // const url = `${this.wizardsUrl}/login/${username}/${password}`;
    const url = `/api/login/${username}/${password}`;
    return this.http.post(url, loginCredentials, {headers: this.headers})
    .toPromise()
    .then(response => response.json() as LoginComponent)
    .catch();
  }
}