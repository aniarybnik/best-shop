import { StorageService } from './../services/storage.service';
import { ModalService } from './../services/modal.service';
import { NgxBoxComponent } from './../ngx-box/ngx-box.component';
import { HttpClient } from '@angular/common/http';
import { routes } from './../routing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserRestService } from '../services/user-rest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

form: FormGroup;
modalRef: BsModalRef;
data;
role;

constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private modalService: ModalService,
              private userRestService: UserRestService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  logIn() {
    this.userRestService.login({login: this.form.controls['name'].value, password: this.form.controls['password'].value})
    .subscribe((result) => {
      // sessionStorage.setItem('user', JSON.stringify(result));
      this.storageService.addStorage('user', result);
      // console.debug(result.role)

      this.role = this.storageService.takeStorage('user').role;
      console.debug(this.role);

      if ( this.role === 2 || this.role === 3) {
        this.router.navigate(['../container']);
      } else {
        this.router.navigate(['../admin']);
      }

      // if (result.role === 2 || result.role === 3) {
      //   this.router.navigate(['../container']);
      // } else {
      //   this.router.navigate(['../admin']);
      // }


    },
    error => {
      this.modalService.message('Brak użytkownika w bazie ! ', 'Błąd !');
      // this.modalRef = this.modalService.show(NgxBoxComponent);
    });
    this.form.reset();
  }

  registration() {
    this.router.navigate(['../registration']);
  }
}

    // Without service Login
    // this.http.post('http://localhost:8443/api/user/login', {
    //   login: this.form.controls['name'].value,
    //   password: this.form.controls['password'].value,
    // }).subscribe(
    //   data => {
    //     // console.debug("TAK");
    //      this.router.navigate(['../shop']);
    // },
    // error => {
    //     console.error(error);
    //     this.modalRef = this.modalService.show(NgxBoxComponent);

    // }
    // );
