import { RoleUsers } from './RoleUsers';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  @Input() roleusers: RoleUsers[];

  form: FormGroup;
  idxrole = 1;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      lastName: [],
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });

      this.http.get('http://localhost:8443/api/user/roles').subscribe(
      (result: RoleUsers[]) => {
          this.roleusers = result;
      });
  }

  selectChangeHander (event: any) {
    this.idxrole = event.target.value; // idx
    // console.debug(this.idxrole);
  }


  registartion_1 () {


    this.http.post('http://localhost:8443/api/user/add', {

      login: this.form.controls['login'].value,
      name: this.form.controls['name'].value,
      lastName: this.form.controls['lastName'].value,
      password: this.form.controls['password'].value,
      role: this.idxrole,
    })
    .subscribe(resp => {
      console.log(resp);
   });
    // console.debug(this.idxrole);
    this.router.navigate(['../login']);
  }
}
