import { Component } from '@angular/core';
import { Wizard } from './wizard';

const WIZARDS: Wizard[] = [
  { school:'Hogwartz', name: 'Harry Potter' },
  { school:'Hogwartz', name: 'Ronald Weasley' },
  { school:'Hogwartz', name: 'Hermione Granger' },
  { school:'Hogwartz', name: 'Ginny Weasley' },
  { school:'Hogwartz', name: 'Severus Snape' },
  { school:'Hogwartz', name: 'Sirius Black' },
  { school:'Hogwartz', name: 'Remus Lupin' },
  { school:'Hogwartz', name: 'Petter Pettigrew' },
  { school:'Hogwartz', name: 'Luna Lovegood' },
  { school:'Hogwartz', name: 'Dumbledore' }
];


@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
  styleUrls: ['./wizard.component.css']
})

export class WizardComponent {
    wizard : Wizard = {
    school: "Hogwartz",
    name : 'Harry Potter'
  };
  wizards = WIZARDS;
}
