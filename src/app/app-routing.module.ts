import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatformComponent } from './platform/platform.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'enterprise', component: EnterpriseComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'help', component: HelpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
