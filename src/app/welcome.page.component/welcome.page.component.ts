import { Component } from '@angular/core';
import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WizardService } from '../wizard.component/wizard.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.page.component.html',
  styleUrls: ['../app.component.css','/welcome.page.component.css']
})

export class WelcomePageComponent {
  constructor(private wizardService: WizardService){}

  dashboardClicked:boolean;
  wizardsClicked:boolean;
  
  onDashboardClicked() : void{
    this.wizardsClicked = false;
    this.dashboardClicked = true;
  }
  onWizardsClicked(): void{
    this.dashboardClicked = false;
    this.wizardsClicked = true;
  }
}