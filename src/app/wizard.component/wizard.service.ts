import { Injectable } from '@angular/core';
import { Wizard } from './wizard';
import { WIZARDS } from './mock-wizards';

@Injectable()
export class WizardService {
    getWizards(): Promise<Wizard[]>{
        return Promise.resolve(WIZARDS);
    }
    getWizard(name: string): Promise<Wizard>{
        return this.getWizards().then(WIZARDS => WIZARDS.find(wizard => wizard.name === name));
    }
}
