import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import {Scout} from './interfaces/scout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escout-app';
  loggedScout: Scout;

  loginservice: LoginService;

  auth(login, password){
    this.loginservice.auth(login, password)
      .subscribe((data: Scout) => this.loggedScout = data)
  }
}
