import { NgxBoxComponent } from './../ngx-box/ngx-box.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {


  constructor(private modalService: BsModalService) { }

  message (text, head) {
    const modal =  this.modalService.show(NgxBoxComponent);
    modal.content.text = text;
    modal.content.head = head;
    }

}
