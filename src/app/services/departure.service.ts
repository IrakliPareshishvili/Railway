import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  private apiUrl = 'https://railway.stepprojects.ge/api/';

  constructor(private http :HttpClient) { }

  getDepartures() : Observable<any> {
    const url = `${this.apiUrl}departures`;
    return this.http.get<any>(url);
  }
}
