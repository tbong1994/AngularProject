import { Wizard } from './wizard';
import { WizardService } from './wizard.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css'],
  providers:[ WizardService]
})

@Injectable()
export class WizardComponent implements OnInit {
  @Input() _wizard: Wizard;
  private wizards : Wizard[];
  private wizardService: WizardService;
  private location : Location;
  private selectedWizard : Wizard;

  ngOnInit(): void {
    this.getWizards();
  }
  constructor(private router: Router, private wizService: WizardService){
    //constructor should not have complex logic(ie; data access method, etc). 
  }
  getWizards(): void{
    this.wizService.getWizards().then(wizards => this.wizards = wizards); //getWizards() from the service class returns a promise, not the array itself
  }
  getSelectedWizard(){
    return this.selectedWizard;
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