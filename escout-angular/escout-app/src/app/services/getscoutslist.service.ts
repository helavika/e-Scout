import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetscoutslistService {

  constructor(private http: HttpClient) { }

  private ip = 'http://192.168.1.33:8000/';
  private url = 'scouts/get-scouts-list/';

  getScouts (): Observable<any> {
    return this.http.get<any>(this.ip+this.url);
  }
}
