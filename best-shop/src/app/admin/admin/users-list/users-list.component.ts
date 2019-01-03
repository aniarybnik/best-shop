import { UserRestService } from './../../../services/user-rest.service';
import { Component, OnInit } from '@angular/core';

export interface listUser {
  id: number;
  name: string;
  lastName: string;
  login: string;
  role: number;
  roleName: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userAll: listUser[] = [];

  constructor(private userRestService: UserRestService) { }


  ngOnInit() {
      this.userRestService.userAll().subscribe((result: listUser[]) => {
      this.userAll = result;
      console.debug(this.userAll);
    }, (error) => {
      console.error(error);
    });
  }

}
