import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ngx-box',
  templateUrl: './ngx-box.component.html',
  styleUrls: ['./ngx-box.component.scss']
})
export class NgxBoxComponent implements OnInit {

  constructor(public modalRef: BsModalRef) { }

  public text;
  public head;
  @Input() myModalProperty: string;

  ngOnInit() {
  }

}
