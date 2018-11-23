import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRestService } from './../services/user-rest.service';


export interface RoleUsers {
  id;
  name;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  @Input() roleUsers: RoleUsers[];

  form: FormGroup;
  idxRole = 1;
  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private userRestService: UserRestService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      lastName: [],
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });

      this.userRestService.roleUser().subscribe(
          (result: RoleUsers[]) => {
              this.roleUsers = result;
          }
         );
  }

  selectChangeHander (event: any) {
    this.idxRole = event.target.value;
     console.debug(this.idxRole);
  }


  registartion() {

    this.userRestService.registrationUser({
      login: this.form.controls['login'].value,
      name: this.form.controls['name'].value,
      lastName: this.form.controls['lastName'].value,
      password: this.form.controls['password'].value,
      role: this.idxRole,
    })
    .subscribe(resp => {
      console.log(resp);
      this.router.navigate(['../login']);

   });
  }
}


        // Without service RoleUser
        // this.http.get('http://localhost:8443/api/user/roles').subscribe(
        //  (result: RoleUsers[]) => {
        //       this.roleUsers = result;
        //  }
        // );


  //   Without service Registration
  //   this.http.post('http://localhost:8443/api/user/add', {

  //     login: this.form.controls['login'].value,
  //     name: this.form.controls['name'].value,
  //     lastName: this.form.controls['lastName'].value,
  //     password: this.form.controls['password'].value,
  //     role: this.idxRole,
  //   })
  //   .subscribe(resp => {
  //     console.log(resp);
  //     this.router.navigate(['../login']);

  //  });
