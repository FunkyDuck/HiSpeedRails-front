import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  role: string = '';
  isLoggued$: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  isConnected() {
    this.authService.isAuthenticated().subscribe(data => { this.isLoggued$ = data })
    console.log(this.isLoggued$)
  }

}
