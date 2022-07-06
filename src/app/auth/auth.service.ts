import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): Observable<boolean> {
    // const token = sessionStorage.getItem('isConnected') as unknown as boolean;

    return sessionStorage.getItem('isConnected') as unknown as Observable<boolean>;
  }
}
