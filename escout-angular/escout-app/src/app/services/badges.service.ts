import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Achievement } from '../interfaces/achievement';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http: HttpClient) { }

  private ip = 'http://127.0.0.1:8000/';
  private url = 'scouts/get-all-badges/';

  getBadges (): Observable<Achievement[]>{
    return this.http.get<Achievement[]>(this.ip+this.url);
  }
}
