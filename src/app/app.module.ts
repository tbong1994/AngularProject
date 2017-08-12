/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


/*components, libraries*/ 
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { WizardService } from './wizard.component/wizard.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ng2parallax,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'wizards',
      component: WizardComponent
    },
    {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
    }
  ])   
  ],
  providers: [WizardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
