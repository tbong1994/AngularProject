/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { AppRouterModule } from './app.routing-module';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
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
import { PostsComponent} from './api.component/posts.component';
import { PostsService } from './api.component/posts.service';
import { AppService } from './app.component.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule,
    BrowserAnimationsModule,
  ],
    providers: [WizardService, WizardComponent,LoginServiceComponent,PostsService,AppService,
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http, RequestOptions]
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }