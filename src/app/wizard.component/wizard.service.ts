import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WizardService {
    private wizardsUrl = '/api'; //relative url to node project ng build creates the dist folder and default url is 'localhost:3000'
    private headers = new Headers({'Content-type': 'application/json'});
    constructor(private http: Http , private router: Router){}

    //returns all the wizards
    getWizards(): Promise<Wizard[]>{
        const url = `${this.wizardsUrl}/wizards`;
        return this.http.get(url).toPromise().then(response=> response.json() as Wizard[]).catch(this.handleError);
    }

    //returns a wizard specified by the name.
    getWizard(name: string): Promise<Wizard>{
        const url = `${this.wizardsUrl}/wizard/${name}`;
        return this.http.get(url).toPromise().then(response => response.json()[0] as Wizard).catch(this.handleError);
    }

    update(wizard : Wizard): Promise<Wizard>{
        const url =`${this.wizardsUrl}/wizard/${wizard.name}`;
        return this.http.put(url, JSON.stringify(wizard), {headers: this.headers})
        .toPromise()
        .then(()=>wizard)
        .catch(this.handleError);
    }

    create(name: string, house: string, face: string, uniqueID:number): Promise<Wizard>{
        const cssClass:string = '';
        let wizard : Wizard = new Wizard(face, house, name, cssClass, uniqueID);
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

    
    
    private handleError(error: any): Promise<any>{
        console.error(error.message, error);
        return Promise.reject(error.message || error);
    }
}
