import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WizardService {
    private wizardsUrl = 'api/wizards';
    private headers = new Headers({'Content-type': 'application/json'});
    constructor(private http: Http){}

    //returns all the wizards
    getWizards(): Promise<Wizard[]>{
        return this.http.get(this.wizardsUrl).toPromise().then(response=> response.json().data as Wizard[]).catch(this.handleError);
    }

    //returns a wizard specified by the name.
    getWizard(name: string): Promise<Wizard>{
        const url = `${this.wizardsUrl}/$name`;
        return this.http.get(url).toPromise().then(response => response.json().data as Wizard).catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('service error occurred', error);
        return Promise.reject(error.message || error);
    }

    update(wizard : Wizard): Promise<Wizard>{
        const url =`${this.wizardsUrl}/${wizard.name}`;
        return this.http.put(url, JSON.stringify(wizard), {headers: this.headers})
        .toPromise()
        .then(()=>wizard)
        .catch(this.handleError);
    }

    create(name: string, house: string, face: string): Promise<Wizard>{
        
        //get from user
        const cssClass:string = '';
        let wizard : Wizard = new Wizard(name, face,cssClass,house);

        const url = `${this.wizardsUrl}/${name}`;
        return this.http.post(url, JSON. stringify(wizard), {headers: this.headers})
        .toPromise()
        .then(()=> wizard)
        .catch(this.handleError);
    }
    
    delete(selectedWizard: Wizard): Promise<Wizard>{
        const url = `${this.wizardsUrl}/${selectedWizard.name}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(()=> null)
        .catch(this.handleError);
    }
}
