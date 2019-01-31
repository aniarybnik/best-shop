import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  idUser: any;
  infoUser;
  roles;
  stringAtbutton;
  isEdit = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private userRestService: UserRestService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id');
    // console.debug(this.idUser);   jeli null to rejestracja ... jesli nie null to edycja
    this.stringAtbutton = 'Zarejestruj się';


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


      if (this.idUser !== null) {
        this.isEdit = true;
        this.stringAtbutton = 'Edytuj';
        this.userRestService.getUser(this.idUser).subscribe((user) => {
            // console.debug(user);
            Object.keys(this.form.controls).forEach((key) => {
              this.form.get(key).setValue(user[key]);
             });

        });
      this.userRestService.roleUser().subscribe(
        (result: RoleUsers[]) => {
          this.roleUsers = result;
          }
        );


    }
  }

  selectChangeHander (event: any) {
    this.idxRole = event.target.value;
    //  console.debug(this.idxRole);
}


  registartion() {

    if (this.idUser === null) {
      console.debug('rejestracja');
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
    } else {
      console.debug('edycja');
      this.userRestService.edit({
        id: this.idUser,
        login: this.form.controls['login'].value,
        name: this.form.controls['name'].value,
        lastName: this.form.controls['lastName'].value,
        role: this.idxRole
      }).subscribe(resp => {
        console.log(resp);
        // this.router.navigate(['../login']);
        this.router.navigate(['admin/main/users']);
      });
    }
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
