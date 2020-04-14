import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoutslistComponent} from './scoutslist/scoutslist.component';
import {BadgeslistComponent} from './badgeslist/badgeslist.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  { path: 'scouts', component: ScoutslistComponent },
  { path: 'scouts/:id', component: ScoutslistComponent },
  { path: 'badges', component: BadgeslistComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
