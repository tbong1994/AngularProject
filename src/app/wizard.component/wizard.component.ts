import { Wizard } from './wizard';
import { WizardService } from './wizard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'wizard-component',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css'],
})

@Injectable()
export class WizardComponent implements OnInit {
  @Input() _wizard: Wizard;
  private wizards : Wizard[];
  private selectedWizard : Wizard;
  private wizardImageFiles = [];
  ngOnInit(): void {
    this.getWizards();
  }
  constructor(private router: Router, private wizService: WizardService, private location: Location){
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

  add(name: string, house:string): void{
    let uniqueID:number  = 0;
    name = name.trim();
    house = house.trim();
    const face = this.wizardImageFiles[Math.ceil(Math.random()*(4-0 + 0))]; //pick random image
    if(!name) {return}
    this.wizService.create(name, house, face, uniqueID)
    .then(wizard => {
      this.wizards.push(wizard);
      this.selectedWizard = null;
    })
  }
  
  remove(): void{
    if(!this.selectedWizard.name){return;}
    this.wizService.delete(this.selectedWizard)
    .then((wizard) => {
      this.wizards = this.wizards.filter(wiz => wiz !== wizard);
      if(this.selectedWizard === wizard){wizard = null;}
    })
  }
}