import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { WizardService } from '../wizard.component/wizard.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector : 'selected-wizard',
    templateUrl: './selected-wizard.component.html',
    styleUrls: [],
    providers: [WizardComponent]
})

export class SelectedWizardComponent implements OnInit{
    @Input() selectedWizard: Wizard;

    ngOnInit(){
        this.route.paramMap
        .switchMap((params: ParamMap) => this.wizardService.getWizard(params.get('name')))
        .subscribe(wizard => this.selectedWizard = wizard);
    }
     constructor(private wizardService: WizardService,
        private route: ActivatedRoute,
        private location: Location,
        private wizComponent: WizardComponent){}

    setSelectedWizard():void{
        this.selectedWizard = this.wizComponent.getSelectedWizard();
    }
}