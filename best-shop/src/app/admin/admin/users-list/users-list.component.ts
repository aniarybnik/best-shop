import { ModalService } from './../../../services/modal.service';
import { UserRestService } from './../../../services/user-rest.service';
import { Component, OnInit } from '@angular/core';

export interface ListUser {
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

  userAll: ListUser[] = [];

  constructor(private userRestService: UserRestService,
              private modalService: ModalService) { }


  ngOnInit() {
      this.userRestService.userAll().subscribe((result: ListUser[]) => {
      this.userAll = result;
      console.debug(this.userAll);
    }, (error) => {
      console.error(error);
    });
  }

  removeUser(user: any) {
    // this.modalService.message('Usunąć tego użytkownika ?', 'UWAGA');
    this.userRestService.removeUser(user.id).subscribe(() => {
      this.ngOnInit();
    },
    (error) => {
      console.error(error);
    });

   }

}
