import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url: string = "http://localhost:3000/user/"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>(this.url, { observe: 'response' });
  }

  getUserById(id: string) {
    return this.http.get<IUser>(this.url + id, { observe: 'response' });
  }

  setUser(user: IUser) {
    return this.http.post<IUser>(this.url, JSON.stringify(user), this.httpOptions);
  }
}
