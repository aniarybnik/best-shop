import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      password: []

      // name: ['', Validators.required],
      // password: ['', Validators.required]
      // nie działa
      // w html  [disabled]="!form.valid"
    });
  }


  add() {
    this.form.reset();
    // Dlaczego nie usuwa się hasło  ??
  }
}
