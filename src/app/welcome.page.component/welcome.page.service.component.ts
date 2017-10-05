import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Headers, Http } from '@angular/http';


@Injectable()
export class WelcomePageServiceComponent{

    constructor(public http: Http){}

    getUserName():Promise<string>{
        const url = "/api/username";
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get(url)
                        .toPromise()
                        .then(res => res.json() as string)
                        .catch();
    }
}