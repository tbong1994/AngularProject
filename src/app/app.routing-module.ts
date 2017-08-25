
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { SelectedWizardComponent } from './selected-wizard.component/selected-wizard.component';
import { LoginComponent } from './login.component/login.component';
import { WelcomePageComponent } from './welcome.page.component/welcome.page.component';

const appRoute: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'wizards', component: WizardComponent},
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'wizard/:id', component: SelectedWizardComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoute)],
    exports : [RouterModule]
})
export class AppRouterModule {}