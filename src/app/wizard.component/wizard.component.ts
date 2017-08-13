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
  private wizards;
  private wizard;
  private wizardService: WizardService;
  private route: ActivatedRoute;
  private location : Location;
  
  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.wizardService.getWizard(params.get('name'))).subscribe(wizard => this.wizard = wizard);
    this.getWizards();
  }
  constructor(private wizService: WizardService){
    // this.wizards = wizService.getWizards(); //constructor should not have complex logic(ie; data access method, etc). 
  }
  getWizards(): void{
    this.wizService.getWizards().then(wizards => this.wizards = wizards); //getWizards() from the service class returns a promise, not the array itself
  }
  goBack(): void {
    this.location.back();
  }
}
let harryPotter = new Wizard('../../assets/img/harrypotter.jpg','Gryffindor','Harry Potter','wizardFace');
let ronaldWeasley = new Wizard('../../assets/img/ron.jpg','Gryffindor','Ronald Weasley','wizardFace');
let hermioneGranger = new Wizard('../../assets/img/hermione.jpg','Gryffindor','Hermione Granger','wizardFace');
let severusSnape = new Wizard('../../assets/img/snape.jpg','Slytherin','Severus Snape','wizardFace');
let voldemort = new Wizard('../../assets/img/voldemort.jpg','Slytherin','Voldemort','wizardFace');

export const WIZARDS: Wizard[] = [
  harryPotter,ronaldWeasley,hermioneGranger, severusSnape, voldemort
];