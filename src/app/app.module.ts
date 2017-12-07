import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { TeamComponent } from './team/team.component';
import { LabsComponent } from './labs/labs.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'data', component: DataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    TeamComponent,
    LabsComponent
  ],
  imports: [
    ClarityModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
