/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { AppRouterModule } from './app.routing-module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

/*components, libraries*/ 
import { ng2parallax } from 'ang2-parallax/ng2parallax';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { WizardService } from './wizard.component/wizard.service';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { SelectedWizardComponent } from './selected-wizard.component/selected-wizard.component';
import { WizardSearchComponent } from './wizard.search.component/wizard.search.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ng2parallax,
    DashboardComponent,
    SelectedWizardComponent,
    WizardSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRouterModule,
  ],
    providers: [WizardService, WizardComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }