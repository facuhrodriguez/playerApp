import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create',
  template: './modal-create.html',
  styles: ['./modal-create.css']
})
export class CreateModal {

  constructor(public activeModal: NgbActiveModal) { }


}
