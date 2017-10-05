import { Component,OnInit } from '@angular/core';
import { WizardComponent } from '../wizard.component/wizard.component';
import { Wizard } from '../wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WizardService } from '../wizard.component/wizard.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginServiceComponent } from '../login.component/login.component.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserServiceComponent} from '../user.component/user.service.component';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.page.component.html',
  styleUrls: ['../app.component.css','/welcome.page.component.css'],
})

export class WelcomePageComponent implements OnInit {

  private username:string;
  private firstname:string;
  private lastname:string;

  dashboardClicked:boolean;
  wizardsClicked:boolean;

  ngOnInit():void{
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUserInfo(params.get('username'))) //get parameter, 'id' should match with wizardService.getWizard() parameter.
    .subscribe(userInfo => {
        this.username = userInfo[0].username;
        this.firstname = userInfo[0].firstname;
        this.lastname = userInfo[0].lastname;
    });
  }
  constructor(public route:ActivatedRoute, public userService: UserServiceComponent){}
  
  onDashboardClicked() : void{
    this.wizardsClicked = false;
    this.dashboardClicked = true;
  }
  onWizardsClicked(): void{
    this.dashboardClicked = false;
    this.wizardsClicked = true;
  }
}