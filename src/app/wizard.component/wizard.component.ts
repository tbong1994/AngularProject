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
  private selectedWizard : Wizard;

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

  add(name: string, house:string, face: string): void{
    name = name.trim();
    house = house.trim();
    face = face.trim();
    if(!name) {return}
    this.wizService.create(name, house, face)
    .then(wizard => {
      this.wizards.push(wizard);
      this.selectedWizard = null;
    })
  }
  remove(wizard: Wizard): void{
    if(!name){return}
    this.wizService.delete(wizard)
    .then(wizard => {
      this.wizards.filter(wiz => wiz !== wizard);
      if(this.selectedWizard === wizard){this.selectedWizard = null};
    })
  }

}