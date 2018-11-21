import { HttpClient } from '@angular/common/http';
import { routes } from './../routing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],

})
export class LogowanieComponent implements OnInit {

form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  add() {

    this.http.post('http://localhost:8443/api/user/login', {
      login: this.form.controls['name'].value,
      password: this.form.controls['password'].value,
    }).subscribe(
      data => {
        console.debug("TAK");
    },
    error => {
        console.error(error);
    }
    );

    // this.router.navigate(['../shop']);
    this.form.reset();
  }

  registration() {
    this.router.navigate(['../registration']);
  }
}
