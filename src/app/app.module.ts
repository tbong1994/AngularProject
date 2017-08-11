/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*components, libraries*/ 
import { ng2parallax } from './bower_components/ang2-parallax/ng2Parallax';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard.component/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ng2parallax
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
