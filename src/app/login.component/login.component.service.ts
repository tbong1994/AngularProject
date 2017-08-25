import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class LoginComponentService {

  auth0 = new auth0.WebAuth({
    clientID: 'Te7a3SShFtpJPYciYc_AxeMJAEvzRDW_',
    domain: 'tbong1994.auth0.com',
    responseType: 'token id_token',
    audience: 'https://tbong1994.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/login',      
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }
  
  public getClientID(): string{
      return this.auth0.clientID;
  }

}