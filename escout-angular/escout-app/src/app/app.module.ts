import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { ScoutslistComponent } from './scoutslist/scoutslist.component';
import { BadgeslistComponent } from './badgeslist/badgeslist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MypageComponent } from './mypage/mypage.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoutslistComponent,
    BadgeslistComponent,
    LoginComponent,
    RegisterComponent,
    MypageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AppComponent,
    ScoutslistComponent,
    BadgeslistComponent,
    LoginComponent,
    RegisterComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
