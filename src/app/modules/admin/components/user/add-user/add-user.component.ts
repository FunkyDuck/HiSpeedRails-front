import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/services/iuser';
import { UserService } from 'src/app/services/user.service';
import { F_USER } from '../../user.form';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService, private _fb: FormBuilder) {
    this.userForm = this._fb.group(F_USER);
  }

  ngOnInit(): void {
  }

  sendUser() {
    if (this.userForm.valid) {
      const v = this.userForm.value;
      const id: string = v.firstName.substring(0, 2) + v.lastName.substring(0, 2) + v.birthDate.substring(2, 4).toString() + '' + v.hireDate.substring(2, 4);

      let toRegister: IUser = { id: id.toLowerCase(), firstName: v.firstName, lastName: v.lastName, adress: v.adress, mail: v.mail, phone: v.phone, birthDate: v.birthDate, hireDate: v.hireDate, role: v.role, gender: v.gender, password: v.role };

      const r = this.userService.setUser(toRegister).subscribe();
      this.userForm.reset();
    }
  }

}
