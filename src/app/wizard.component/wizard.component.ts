import { Component } from '@angular/core';
import { Wizard } from './wizard';
import { WizardService } from './wizard.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css'],
  providers:[ WizardService ]
})

export class WizardComponent implements OnInit {
  public wizards;
  ngOnInit(): void {
    this.getWizards();
  }
  constructor(private wizService: WizardService){
    // this.wizards = wizService.getWizards(); //constructor should not have complex logic(ie; data access method, etc). 
  }
  getWizards(): void{
    this.wizService.getWizards().then(WIZARDS => this.wizards = WIZARDS);
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