import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {
  public formData: FormGroup = new FormGroup({});
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
  }

  private initForm(): void {
    this.formData = this.fb.group({
      name: new FormControl([''], Validators.required),
      surname: new FormControl([''], Validators.required),
      nickName: new FormControl(['']),
      position: new FormControl([''], Validators.required),
      age: new FormControl([''], Validators.required),
      country: new FormControl(['']),
      value: new FormControl(['']),
      team: this.fb.group({
        name: new FormControl(['']),
        nickName: new FormControl(['']),
        place: this.fb.group({
          city: new FormControl(['']),
          country: new FormControl([''])
        })
      })
    })

  }
}
