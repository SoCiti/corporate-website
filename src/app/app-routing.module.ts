import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HelpComponent } from './help/help.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SneakPeekComponent } from './sneak-peek/sneak-peek.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { SoproposeComponent } from './solutions/sopropose/sopropose.component';
import { RollManagerComponent } from './solutions/roll-manager/roll-manager.component';
import { CommuniqueComponent } from './solutions/communique/communique.component';
import { ConnectionsComponent } from './solutions/connections/connections.component';
import { LegiscriptComponent } from './solutions/legiscript/legiscript.component';
import { InsightsComponent } from './solutions/insights/insights.component';
import { ThirdwatchComponent } from './solutions/thirdwatch/thirdwatch.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'enterprise', component: EnterpriseComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'solutions/sopropose', component: SoproposeComponent},
  {path: 'solutions/roll-manager', component: RollManagerComponent},
  {path: 'solutions/communique', component: CommuniqueComponent},
  {path: 'solutions/connections', component: ConnectionsComponent},
  {path: 'solutions/legiscript', component: LegiscriptComponent},
  {path: 'solutions/insights', component: InsightsComponent},
  {path: 'solutions/thirdwatch', component: ThirdwatchComponent},
  {path: 'connect', component: HelpComponent},
  {path: 'demo', component: SneakPeekComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'investors', component: InvestorRelationsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
