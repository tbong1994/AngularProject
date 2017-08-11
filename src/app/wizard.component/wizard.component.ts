import { Component } from '@angular/core';
import { Wizard } from './wizard';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css']
})

export class WizardComponent {
  wizards = WIZARDS;
}

let harryPotter = new Wizard('../../assets/img/harrypotter.jpg','Gryffindor','Harry Potter','wizardFace');
let ronaldWeasley = new Wizard('../../assets/img/ron.jpg','Gryffindor','Ronald Weasley','wizardFace');
let hermioneGranger = new Wizard('../../assets/img/hermione.jpg','Gryffindor','Hermione Granger','wizardFace');
let severusSnape = new Wizard('../../assets/img/snape.jpg','Gryffindor','Hermione Granger','wizardFace');
let voldemort = new Wizard('../../assets/img/voldemort.jpg','Gryffindor','Hermione Granger','wizardFace');

const WIZARDS: Wizard[] = [
  harryPotter,ronaldWeasley,hermioneGranger, severusSnape, voldemort
];