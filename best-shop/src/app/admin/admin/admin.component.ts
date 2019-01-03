import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router) { }

currentUser;
userRole;

  ngOnInit() {
    this.currentUser = this.storageService.takeStorage('user');
    this.userRole = this.currentUser.role;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['../login']);
  }

}
