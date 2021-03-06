/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { AppRouterModule } from './app.routing-module';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*components, libraries*/ 
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { WizardService } from './wizard.component/wizard.service';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { SelectedWizardComponent } from './selected-wizard.component/selected-wizard.component';
import { WizardSearchComponent } from './wizard.search.component/wizard.search.component';
import { LoginComponent } from './login.component/login.component';
import { WelcomePageComponent } from './welcome.page.component/welcome.page.component';
import { LoginServiceComponent } from './login.component/login.component.service';
import { AppService } from './app.component.service';
import {MyWizardAttributeDirective} from './my.attribute.component';
import {NgbdCarouselConfig} from './carousel.component/carousel.component';
import {UserServiceComponent} from './user.component/user.service.component';
import {UserComponent} from './user.component/user.component';
import {SignUpComponent} from './signup.component/signup.component';
import {SignUpServiceComponent} from './signup.component/signup.service.component';
import {AkaPipe} from './my.aka.pipe';
import {SimpleGame} from './game.component/hp.game/hp.game';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ng2parallax,
    DashboardComponent,
    SelectedWizardComponent,
    WizardSearchComponent,
    LoginComponent,
    WelcomePageComponent,
    MyWizardAttributeDirective,
    SignUpComponent,
    NgbdCarouselConfig,
    UserComponent,
    AkaPipe,
    SimpleGame,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule,
    BrowserAnimationsModule,
  ],
  providers: [WizardService, WizardComponent,LoginServiceComponent,AppService,UserServiceComponent,SignUpServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }