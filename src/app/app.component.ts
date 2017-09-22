import { Component } from '@angular/core';
import { WizardComponent } from './wizard.component/wizard.component';
import { Wizard } from './wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component/login.component.service';
import { AppService } from './app.component.service';

@Component({
  selector: 'harry-potter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title:string = 'Expelliarmus';
  authenticated : boolean = false;
  constructor(private router: Router, private loginService: LoginServiceComponent, private appService: AppService){}

  ngOnInit(){
    this.loginService.handleAuthentication();
  }

  authenticate():boolean{
    return this.authenticated = this.appService.getIsAuthenticated();
  }

}
