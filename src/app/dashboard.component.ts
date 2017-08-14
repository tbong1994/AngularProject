import { Component, OnInit } from '@angular/core';
import { Wizard } from './wizard.component/wizard';
import { WizardService } from './wizard.component/wizard.service';


//DASHBOARD ONLY DISPLAYS THE TOP 3 CHARACTERS
@Component({
  selector: 'my-dashboard',
  templateUrl: './wizard.component/wizard.html',
  styleUrls: ['./wizard.component/wizard.component.css'],
  providers: [WizardService]
})

export class DashboardComponent implements OnInit { 
    public wizards : Wizard[] = [];
    
    constructor(private wizService: WizardService) {
    }
    ngOnInit(){
        this.wizService.getWizards().then( wizards => this.wizards = wizards.slice(0,3) );
    }

}