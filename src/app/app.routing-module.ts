
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { SelectedWizardComponent } from './selected-wizard.component/selected-wizard.component';
import { LoginComponent } from './login.component/login.component';
import { WelcomePageComponent } from './welcome.page.component/welcome.page.component';

const appRoute: Routes = [
  {path: 'login', component: LoginComponent, outlet: 'login'},
  {path: 'welcome', component: WelcomePageComponent},
<<<<<<< HEAD
  {path: 'dashboard',component: DashboardComponent},
  {path: 'wizards', component: WizardComponent},
  {path: '',redirectTo: '/login',pathMatch: 'full'},
=======
  {path: 'dashboard',component: DashboardComponent, outlet:'dash'},
  {path: 'wizards', component: WizardComponent, outlet:'display'},
  {path: '',redirectTo: '/welcome',pathMatch: 'full'},
>>>>>>> 78cd590c8d0a1894e96a62336be77a3d9a5453a0
  {path: 'wizard/:name', component: SelectedWizardComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoute)],
    exports : [RouterModule]
})
export class AppRouterModule {}