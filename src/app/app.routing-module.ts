
import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WizardComponent } from './wizard.component/wizard.component';

const appRoute: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'wizards', component: WizardComponent},
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'detail/:name', component: WizardComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoute)],
    exports : [RouterModule]
})
export class AppRouterModule {}