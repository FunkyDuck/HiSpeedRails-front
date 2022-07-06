import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  url: string = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  connection(id: string) {
    console.log("OBS")
    return this.http.get(this.url + "/" + id, { observe: 'response' });
  }
}
