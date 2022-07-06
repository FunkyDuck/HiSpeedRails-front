import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user-auth.service';

import { F_LOGIN } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userAuthService: UserAuthService, private _fb: FormBuilder, public router: Router) {
    this.loginForm = this._fb.group(F_LOGIN);
  }

  ngOnInit(): void {
    if (localStorage.getItem("isConnected")) {
      this.router.navigate(['admin']);
    }
  }

  connection() {
    this.userAuthService.connection(this.loginForm.value.id)
      .subscribe(resp => {
        const data: any = resp.body;
        if (data.id === this.loginForm.value.id && data.password === this.loginForm.value.password) {
          sessionStorage.setItem("isConnected", 'true');
          sessionStorage.setItem("role", data.role);
          this.router.navigate(['admin']);
        } else {
          console.warn("FCK")
        }
      });
  }

}
