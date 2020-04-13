import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { ScoutslistComponent } from './scoutslist/scoutslist.component';
import { BadgeslistComponent } from './badgeslist/badgeslist.component';

const appRoutes: Routes = [
  { path: 'scouts', component: ScoutslistComponent },
  { path: 'scouts/:id', component: ScoutslistComponent },
  { path: 'badges', component: BadgeslistComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ScoutslistComponent,
    BadgeslistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
