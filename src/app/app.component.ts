import { Component } from '@angular/core';
import { WizardComponent } from './wizard.component/wizard.component';
import { Wizard } from './wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component/login.component.service';

@Component({
  selector: 'harry-potter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  // title = 'Tour of Harry Potter';

  constructor(private router: Router, private loginService: LoginServiceComponent){}

  ngOnInit(){
    this.loginService.login();
    this.loginService.handleAuthentication();
  }

  private handleError(error: any): Promise<any>{
    console.error(error.message, error);
    return Promise.reject(error.message || error);
  }
}
