import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStation } from './istation';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url: string = "http://localhost:3000/station/"

  constructor(private http: HttpClient) { }

  getStations() {
    return this.http.get<IStation[]>(this.url, { observe: 'response' });
  }

  getStationById(id: number) {
    return this.http.get<IStation>(this.url + id, { observe: 'response' });
  }

  setStation(station: IStation) {
    return this.http.post<IStation>(this.url, JSON.stringify(station), this.httpOptions);
  }
}
