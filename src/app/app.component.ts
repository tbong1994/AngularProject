import { Component } from '@angular/core';
import { WizardComponent } from './wizard.component/wizard.component';
import { Wizard } from './wizard.component/wizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Harry Potter';
}