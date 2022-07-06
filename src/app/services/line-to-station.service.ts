import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILineToStation } from './iline-to-station';

@Injectable({
  providedIn: 'root'
})
export class LineToStationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url: string = "http://localhost:3000/lineComposition/"

  constructor(private http: HttpClient) { }

  getByLine(id: string) {
    return this.http.get<ILineToStation[]>(this.url + "?line=" + id + "&order=position", { observe: 'response' });
  }

  getByStation(id: number) {
    return this.http.get<ILineToStation[]>(this.url + "?station=" + id, { observe: 'response' });
  }

  setToLine(newLine: ILineToStation) {
    return this.http.post<ILineToStation>(this.url, JSON.stringify(newLine), this.httpOptions);
  }
}
