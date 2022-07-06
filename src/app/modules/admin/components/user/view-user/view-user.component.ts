import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/services/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  id: any;
  // @ViewChild('user') 
  user: IUser = { id: '', firstName: '', lastName: '', adress: '', mail: '', phone: '', role: '', password: '', hireDate: '', birthDate: '', gender: '' };

  constructor(private route: ActivatedRoute, private usr: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.usr.getUserById(this.id).subscribe(resp => this.user = resp.body as IUser );
  }

}
