import { Component, OnInit, Input } from '@angular/core';
import { Wizard } from '../wizard.component/wizard';
import { WizardService } from '../wizard.component/wizard.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserComponent } from '../user.component/user.component';

//DASHBOARD ONLY DISPLAYS THE TOP 3 CHARACTERS
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../wizard.component/wizard.component.css'],
})

export class DashboardComponent implements OnInit { 
    @Input() user: UserComponent; //get wizard from parent component

    public wizards : Wizard[] = [];
    private selectedWizard : Wizard;

    constructor(private wizService: WizardService, private router: Router, private location: Location) {}

    ngOnInit(){
        this.wizService.getWizards().then( wizards => this.wizards = wizards.slice(0,3) );
    }
    
    onSelect( wizard: Wizard){
        this.selectedWizard = wizard;
    }

    goToDetail(): void{
        this.router.navigate(['/wizard', this.selectedWizard.name]);
    }
}