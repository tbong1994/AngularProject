import { Component } from '@angular/core';
import { CharacterDetailComponent } from './character-detail.component';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Harry Potter';
}