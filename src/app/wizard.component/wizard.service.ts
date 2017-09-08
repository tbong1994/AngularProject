import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WizardService {
    private wizardsUrl = 'http://localhost:3000/api/wizards'; //url must match the mock database variable name
    private headers = new Headers({'Content-type': 'application/json'});
    private wizardImageFiles = [];
    constructor(private http: Http , private router: Router){}

    //returns all the wizards
    getWizards(): Promise<Wizard[]>{
        return this.http.get(this.wizardsUrl).toPromise().then(response=> response.json() as Wizard[]).catch(this.handleError);
    }

    //returns a wizard specified by the name.
    getWizard(id: string): Promise<Wizard>{
        const url = `${this.wizardsUrl}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json() as Wizard).catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error(error.message, error);
        return Promise.reject(error.message || error);
    }

    update(wizard : Wizard): Promise<Wizard>{
        const url =`${this.wizardsUrl}/${wizard.id}`;
        return this.http.put(url, JSON.stringify(wizard), {headers: this.headers})
        .toPromise()
        .then(()=>wizard)
        .catch(this.handleError);
    }

    create(name: string, house: string, face: string): Promise<Wizard>{
        const cssClass:string = '';
        let wizard : Wizard = new Wizard(face, house, name, cssClass);
        return this.http.post(this.wizardsUrl, JSON. stringify(wizard), {headers: this.headers})
        .toPromise()
        .then(()=> wizard)
        .catch(this.handleError);
    }
    
    delete(selectedWizard: Wizard): Promise<Wizard>{
        const url = `${this.wizardsUrl}/${selectedWizard.id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(()=> selectedWizard)
        .catch(this.handleError);
    }

    logout() {
        this.router.navigate(['/login']);
    }

    getPosts(): Observable<String>{
        const url = `http://localhost:3000/api/posts`;
        return this.http.post(url, {headers: this.headers})
        .map((response)=> response.json().data as String)
        .catch(this.handleError);
    }
}
