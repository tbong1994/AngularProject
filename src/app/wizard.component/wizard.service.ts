import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { WIZARDS } from './wizard.component';

@Injectable()
export class WizardService {
    getWizards(): Promise<Wizard[]>{
        return Promise.resolve(WIZARDS); //return as a promise
    }
}
