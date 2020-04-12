import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scout } from '../interfaces/scout';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetscoutslistService {

  constructor(private http: HttpClient) { }

  private ip = 'http://127.0.0.1:8000/';
  private url = 'scouts/get-scouts-list/';

  getScouts (): Observable<Scout[]> {
    return this.http.get<Scout[]>(this.ip+this.url);
  }
}
