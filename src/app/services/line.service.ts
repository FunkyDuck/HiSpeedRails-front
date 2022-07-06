import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILine } from './iline';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url: string = "http://localhost:3000/Line/"

  constructor(private http: HttpClient) { }

  getLines() {
    return this.http.get<ILine[]>(this.url, { observe: 'response' });
  }

  getLineById(id: string) {
    return this.http.get<ILine>(this.url + id, { observe: 'response' });
  }

  setLine(line: ILine) {
    return this.http.post<ILine>(this.url, JSON.stringify(line), this.httpOptions);
  }
}
