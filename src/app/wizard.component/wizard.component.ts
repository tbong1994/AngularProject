import { Wizard } from './wizard';
import { WizardService } from './wizard.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css'],
  providers:[ WizardService ]
})

export class WizardComponent implements OnInit {
  @Input() _wizard: Wizard;
  private wizards;
  private wizard;
  private wizardService: WizardService;
  private route: ActivatedRoute;
  private location : Location;
  
  ngOnInit(): void {
    this.getWizards();
    this.route.paramMap
    .switchMap((params: ParamMap) => this.wizardService.getWizard(params.get('name'))).subscribe(wizard => this.wizard = wizard);
  }
  getWizard(name: string): void{
    this.wizardService.getWizard(name).then(wizard => this.wizard = wizard);
  }
  constructor(private wizService: WizardService){
    //constructor should not have complex logic(ie; data access method, etc). 
  }
  getWizards(): void{
    this.wizService.getWizards().then(wizards => this.wizards = wizards); //getWizards() from the service class returns a promise, not the array itself
  }
  goBack(): void {
    this.location.back();
  }
}