import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDeparturesService {

  private apiUrl = 'https://railway.stepprojects.ge/api/';

  constructor(private http :HttpClient) { }
  departureData: any;
  trainData: any;

  getDepartures(from : string, to : string, date : string) : Observable<any> {
    const url = `${this.apiUrl}getdeparture`;
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);
    params = params.append('date', date);

    return this.http.get<any>(url, {params : params});
  }
}
