import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Wizard } from '../wizard.component/wizard';

@Injectable()
export class WizardSearchService{

    constructor(private http: Http){}

    search(term: string): Observable<Wizard[]>{
        return this.http.get(`/api/wizards/${term}`)
                .map(response => response.json() as Wizard[]);
        // const url = "http://localhost:3000/wizards";
        // return this.http.get(`${url}/?name=${term}`)
        //         .map(response => response.json() as Wizard[]);
    }
}