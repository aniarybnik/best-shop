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
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],

      // name: ['', Validators.required],
      // password: ['', Validators.required]
      // nie działa
      // w html  [disabled]="!form.valid"
    });
  }


  add() {
    this.router.navigate(['../shop']);
    this.form.reset();
  }
}
