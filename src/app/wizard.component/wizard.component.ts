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

let harryPotter = new Wizard('../../assets/img/harrypotter.jpg','Gryffindor','Harry Potter','wizardFace harrysFace');
let ronaldWeasley = new Wizard('../../assets/img/ron.jpg','Gryffindor','Ronald Weasley','wizardFace');
let hermioneGranger = new Wizard('../../assets/img/hermione.jpg','Gryffindor','Hermione Granger','wizardFace');

const WIZARDS: Wizard[] = [
  ronaldWeasley,hermioneGranger, harryPotter
];