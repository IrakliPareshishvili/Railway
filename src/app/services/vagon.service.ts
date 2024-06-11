import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VagonService {

  private apiUrl = 'https://railway.stepprojects.ge/api/';

  constructor(private http :HttpClient) { }

  getVagons() : Observable<any> {
    const url = `${this.apiUrl}vagons`;
    return this.http.get<any>(url);
  }
}
