import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Scout} from '../interfaces/scout';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private ip = 'http://127.0.0.1:8000/';
  private url = 'scouts/login/';

  auth (login, password): Observable<any> {
    let params = new HttpParams().set("login",login).set("password",password)
    return this.http.get<any>(this.ip+this.url, {params: params});
  }
}
