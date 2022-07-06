import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/services/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resp) => {
      this.users = JSON.parse(JSON.stringify(resp.body));
      console.log(this.users)
    });
  }

}
