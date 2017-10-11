import { Component } from '@angular/core';
import { WizardComponent } from './wizard.component/wizard.component';
import { Wizard } from './wizard.component/wizard';
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceComponent } from './login.component/login.component.service';
import { AppService } from './app.component.service';
import { LoginComponent} from './login.component/login.component';

@Component({
  selector: 'harry-potter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title:string = 'Muggles Not Allowed';
  authenticated : boolean = false;
  constructor(private appService: AppService, public router:Router){}

  ngOnInit(){
    this.router.navigate(['/login']);
  }

  onLogOutClicked():void{
    this.authenticated=false;
    this.appService.logout();
  }
  onActivate(component):void{
    // console.log(component.route.component.name);
    if(component.route){
      if(component.route.component.name != 'LoginComponent'){ //don't show logout in login page
        this.showLogOutButton();
      }
    }
  }
  showLogOutButton():void{
    this.authenticated = true;
  }
}
