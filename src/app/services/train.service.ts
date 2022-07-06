import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ITrain } from './itrain';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url: string = "http://localhost:3000/train/"

  constructor(private http: HttpClient) { }

  getTrains() {
    return this.http.get<ITrain[]>(this.url, { observe: 'response' });
  }

  getTrainById(id: string) {
    return this.http.get<ITrain>(this.url + id, { observe: 'response' });
  }

  setTrain(user: ITrain) {
    return this.http.post<ITrain>(this.url, JSON.stringify(user), this.httpOptions);
  }
}
