import { Component } from '@angular/core';
import { Character } from './character';


@Component({
  selector: 'character-detail',
  template:`
    <div *ngIf="hero">
      <h2>{{character.name}} details!</h2>
      <div><label>dob: </label>{{character.dob}}</div>
      <div>
        <label>school: </label>
        <input [(ngModel)]="character.school" placeholder="school"/>
      </div>
    </div>
  `
})

export class CharacterDetailComponent {
    character : Character = {
    name : 'Harry Potter',
    dob : new Date(7/31/1980),
    address: "NO.4 Privet Dr, London",
    school: "Hogwartz"
  };
}
