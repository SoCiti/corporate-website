import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HelpComponent } from './help/help.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SneakPeekComponent } from './sneak-peek/sneak-peek.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { PartnersComponent } from './partners/partners.component';
import { SoproposeComponent } from './solutions/sopropose/sopropose.component';
import { RollManagerComponent } from './solutions/roll-manager/roll-manager.component';
import { CommuniqueComponent } from './solutions/communique/communique.component';
import { ConnectionsComponent } from './solutions/connections/connections.component';
import { LegiscriptComponent } from './solutions/legiscript/legiscript.component';
import { InsightsComponent } from './solutions/insights/insights.component';
import { ThirdwatchComponent } from './solutions/thirdwatch/thirdwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SolutionsComponent,
    EnterpriseComponent,
    HelpComponent,
    ForbiddenComponent,
    SneakPeekComponent,
    AboutUsComponent,
    InvestorRelationsComponent,
    PartnersComponent,
    SoproposeComponent,
    RollManagerComponent,
    CommuniqueComponent,
    ConnectionsComponent,
    LegiscriptComponent,
    InsightsComponent,
    ThirdwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
