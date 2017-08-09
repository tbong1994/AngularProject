import { Component } from '@angular/core';
import { Wizard } from './wizard';

const WIZARDS: Wizard[] = [
  { house: 'Gryffindor', name: 'Harry Potter' },
  { house: 'Gryffindor', name: 'Ronald Weasley' },
  { house: 'Gryffindor', name: 'Hermione Granger' },
  { house: 'Gryffindor', name: 'Ginny Weasley' },
  { house: 'Slytherin', name: 'Severus Snape' },
  { house: 'Gryffindor', name: 'Sirius Black' },
  { house: 'Gryffindor', name: 'Remus Lupin' },
  { house: 'Gryffindor', name: 'Petter Pettigrew' },
  { house: 'HufflePuff', name: 'Luna Lovegood' },
  { house: 'Gryffindor', name: 'Dumbledore' }
];


@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css']
})

export class WizardComponent {
    wizard : Wizard = {
    house: "Gryffindor",
    name : 'Harry Potter'
  };
  wizards = WIZARDS;
}
