import { Component,OnInit } from '@angular/core';
import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WizardService } from '../wizard.component/wizard.service';
import { RouterModule, Routes } from '@angular/router';
// import { WelcomePageServiceComponent } from './welcome.page.service.component';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.page.component.html',
  styleUrls: ['../app.component.css','/welcome.page.component.css'],
  providers:[],
})

export class WelcomePageComponent implements OnInit {

  private username:string;
  dashboardClicked:boolean;
  wizardsClicked:boolean;

  ngOnInit():void{
    // this.getUserName();
  }
  constructor(){}
  
  onDashboardClicked() : void{
    this.wizardsClicked = false;
    this.dashboardClicked = true;
  }
  onWizardsClicked(): void{
    this.dashboardClicked = false;
    this.wizardsClicked = true;
  }
  getUserName(): void{
    
  }
}