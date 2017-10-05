import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.component/wizard.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector : 'selected-wizard',
    templateUrl: './selected-wizard.component.html',
    styleUrls: ['../wizard.component/wizard.component.css'],
    animations:[
        trigger('wizardState', [
            state('inactive', style({
              backgroundColor: '#eee',
              transform: 'scale(1)'
            })),
            state('active',   style({
              backgroundColor: '#cfd8dc',
              transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
          ])
    ]
})

export class SelectedWizardComponent implements OnInit{
    @Input() selectedWizard: Wizard;

    public newName:string;
    public isNameValidated: boolean;
    ngOnInit(){
        //grab selected wizard
        this.route.paramMap
        .switchMap((params: ParamMap) => this.wizardService.getWizard(params.get('name'))) //get parameter, 'id' should match with wizardService.getWizard() parameter.
        .subscribe(wizard => { //wizard here is the result of the .switchMap()! 
            this.selectedWizard = wizard;
            this.newName = wizard.name;
        });
    }
     constructor(private wizardService: WizardService,
        private route: ActivatedRoute,
        private location: Location,
        private wizComponent: WizardComponent){}

    setSelectedWizard():void{
        this.selectedWizard = this.wizComponent.getSelectedWizard();
    }
    setName(): void{
        this.newName = this.selectedWizard.name;
    }
    goBack():void{
        this.location.back();
    }
    save(name:string):void{
        if(!this.isNameValid(name)){
            return;
        }
        this.selectedWizard.name = name;
        this.wizardService.update(this.selectedWizard).then(()=> this.goBack());
    }
    isNameValid(name:string):boolean{
        if(/^[a-zA-Z _]*$/g.test(name)){
            return this.isNameValidated = true;
        }
        return this.isNameValidated = false;
    }
}