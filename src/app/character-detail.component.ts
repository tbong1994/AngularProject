import { Component } from '@angular/core';
import { Character } from './character';

const CHARACTERS: Character[] = [
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

 let characters = CHARACTERS;
@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail.component.html'
})

export class CharacterDetailComponent {
    character : Character = {
    school: "Hogwartz",
    name : 'Harry Potter'
  };
}
