import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-box',
  templateUrl: './ngx-box.component.html',
  styleUrls: ['./ngx-box.component.scss']
})
export class NgxBoxComponent implements OnInit {


  // modalRef: BsModalRef;
  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
  }

}
