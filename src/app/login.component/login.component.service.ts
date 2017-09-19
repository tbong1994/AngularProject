import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LoginServiceComponent {

  private wizardsUrl = '/api'; //relative url to node project ng build creates the dist folder and default url is 'localhost:3000'
  private headers = new Headers({'Content-type': 'application/json'});
  private isValid: boolean = false;
  auth0 = new auth0.WebAuth({
    clientID: 'gcN4GpyJhPL3655VpH2oSURaHFO5ZU7h',
    domain: 'tbong1994.auth0.com',
    responseType: 'token id_token',
    audience: 'https://tbong1994.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/welcome',
    scope: 'openid'
  });

  constructor(public router: Router, public http: Http) {}

  public login(): void {
    this.auth0.authorize();
  }
  
  public getClientID(): string{
      return this.auth0.clientID;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/welcome']);
      } else if (err) {
        this.router.navigate(['/login']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public isLoginValid(username:string, password:string) : boolean{
    if(username == '' || password == ''){return this.isValid;}
    
    // let loginCredentials = JSON.stringify({username, password});
    let loginCredentials = {username,password};
    const url = `${this.wizardsUrl}/login/${username}/${password}`;
    this.http.post(url, loginCredentials, {headers: this.headers})
    .map(response => response.json() ? this.isValid=true : this.isValid=false)
    .subscribe();
    return this.isValid;
  }
}