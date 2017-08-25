import { Component } from '@angular/core';
import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.page.component.html',
  styleUrls: ['../app.component.css']
})

export class WelcomePageComponent {
  title = 'Welcome to the Tour of Harry Potter';
}