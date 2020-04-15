import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Scout } from '../interfaces/scout';
import { LoginService } from '../services/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: '';
  password: '';

  constructor(
    private loginService: LoginService,
    private appComponent: AppComponent,
  ) {}

  auth(login: string, password: string) {
    this.loginService.auth(login, password)
      .subscribe((data: Scout) => this.appComponent.loggedScout = data);
  }


  onSubmit(login, password) {
    //this.auth(loginData.login, loginData.password)
    this.auth(login, password);
  }

  ngOnInit(): void {
  }

}
