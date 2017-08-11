import { Component } from '@angular/core';
import { WizardComponent } from './wizard.component/wizard.component';
import { Wizard } from './wizard.component/wizard';
import { ng2parallax } from './bower_components/ang2-parallax/ng2Parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'harry-potter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Harry Potter';
}
