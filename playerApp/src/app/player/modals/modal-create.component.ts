import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerI } from 'src/app/shared/interfaces/player-i';


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

  public onSubmit(): void {
    const playerData: PlayerI = {
      name: this.formData.value.name,
      surname: this.formData.value.surname,
      nickName: this.formData.value.nickName ? this.formData.value.nickName : null,
      position: this.formData.value.position,
      age: this.formData.value.age,
      country: this.formData.value.country,
      value: this.formData.value.value,
      team: {
        name: this.formData.value.team.name,
        nickName: this.formData.value.team.nickName ? this.formData.value.team.nickName : null,
        place: {
          city: this.formData.value.team.city ? this.formData.value.team.city : null,
          country: this.formData.value.team.country ? this.formData.value.team.country : null
        }
      },
    }
    this.activeModal.close(playerData);
  }

  private initForm(): void {
    this.formData = this.fb.group({
      name: new FormControl([''], Validators.required),
      surname: new FormControl([''], Validators.required),
      nickName: new FormControl(['']),
      position: new FormControl([''], Validators.required),
      age: new FormControl([''], [Validators.required, Validators.min(10)]),
      country: new FormControl(['']),
      value: new FormControl(['']),
      team: this.fb.group({
        name: new FormControl(['']),
        nickName: new FormControl(['']),
        city: new FormControl(['']),
        country: new FormControl([''])
      })
    })
  }

  public onClose(): void {
    this.activeModal.close();
  }
}
