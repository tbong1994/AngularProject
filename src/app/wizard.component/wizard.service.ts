import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WizardService {
    private wizardsUrl = 'api/wizards'; //url must match the mock database variable name
    private wizardImageFilesUrl = 'api/wizardImageFiles';
    private headers = new Headers({'Content-type': 'application/json'});
    private wizardImageFiles = [];
    constructor(private http: Http){}

    getWizardImageFiles(): Promise<string[]>{
        return this.http.get(this.wizardImageFilesUrl).toPromise().then(response => response.json().data as string[]).catch(this.handleError);
    }
    //returns all the wizards
    getWizards(): Promise<Wizard[]>{
        return this.http.get(this.wizardsUrl).toPromise().then(response=> response.json().data as Wizard[]).catch(this.handleError);
    }

    //returns a wizard specified by the name.
    getWizard(name: string): Promise<Wizard>{
        const url = `${this.wizardsUrl}/${name}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Wizard).catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error(error.message, error);
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
        const cssClass:string = '';
        let wizard : Wizard = new Wizard(face, house, name, cssClass);

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
