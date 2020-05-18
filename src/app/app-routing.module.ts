import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HelpComponent } from './help/help.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SneakPeekComponent } from './sneak-peek/sneak-peek.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'enterprise', component: EnterpriseComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'contact', component: HelpComponent},
  {path: 'demo', component: SneakPeekComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
