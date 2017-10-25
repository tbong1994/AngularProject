
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { WizardComponent } from './wizard.component/wizard.component';
import { SelectedWizardComponent } from './selected-wizard.component/selected-wizard.component';
import { LoginComponent } from './login.component/login.component';
import { WelcomePageComponent } from './welcome.page.component/welcome.page.component';
import {SignUpComponent} from './signup.component/signup.component';
import {SimpleGame} from './game.component/hp.game/hp.game';

const appRoute: Routes = [
  {path: 'login', component: LoginComponent, data:{name:'login'}},
  {path: 'welcome/:username', component: WelcomePageComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'wizards', component: WizardComponent},
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'wizard/:name', component: SelectedWizardComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'game', component: SimpleGame}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoute/*,{enableTracing:true}*/)], //enableTracing is for debugging
    exports : [RouterModule]
})
export class AppRouterModule {}