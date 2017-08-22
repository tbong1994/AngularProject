import { Component, OnInit } from '@angular/core';
import { Wizard } from '../wizard.component/wizard';
import { WizardService } from '../wizard.component/wizard.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

//DASHBOARD ONLY DISPLAYS THE TOP 3 CHARACTERS
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../wizard.component/wizard.component.css'],
  providers: [WizardService]
})

export class DashboardComponent implements OnInit { 
    public wizards : Wizard[] = [];
    private selectedWizard : Wizard;

    constructor(private wizService: WizardService, private router: Router, private location: Location) {
    }
    ngOnInit(){
        this.wizService.getWizards().then( wizards => this.wizards = wizards.slice(0,3) );
    }
    goBack(): void {
    this.location.back();
  }
    onSelect( wizard: Wizard){
        this.selectedWizard = wizard;
    }
    goToDetail(): void{
        this.router.navigate(['/wizard', this.selectedWizard.name]);
    }
}