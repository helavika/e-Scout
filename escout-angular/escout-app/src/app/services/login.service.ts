import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Scout} from '../interfaces/scout';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private ip = 'http://127.0.0.1:8000/';
  private url = 'scouts/login/';

  auth (login, password): Observable<any> {
    return this.http.post<any>(this.ip+this.url, {login: login, password: password});
  }
}
