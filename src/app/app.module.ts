import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { TeamComponent } from './team/team.component';
import { LabsComponent } from './labs/labs.component';
import { PublicationsComponent } from './publications/publications.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import {LABS} from './labs/labs-data';
import {TEAMS} from './team/team-data';
import {STATS} from './data/stats_data';
import {PUBLICATIONS} from './publications/publi-data';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'team', component: TeamComponent, data: { state: 'team' } },
  { path: 'labs', component: LabsComponent, data: { state: 'labs' } },
  { path: 'data', component: DataComponent, data: { state: 'data' } },
  { path: 'publications/:id', component: PublicationsComponent, data: { state: 'publications' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    TeamComponent,
    LabsComponent,
    PublicationsComponent
  ],
  imports: [
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4BA3XY4OQiyPZ8hdRVEU8qABkvLej8xc'
    }),
    AgmSnazzyInfoWindowModule,
    NgxChartsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [LABS, TEAMS, STATS, PUBLICATIONS],
  bootstrap: [AppComponent]
})

export class AppModule { }
