import { Component, Input, OnInit } from '@angular/core';
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
  private player: PlayerI | undefined;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public setPlayer(player: PlayerI) {
    this.player = player;
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
    console.log(playerData);
    this.activeModal.close(playerData);
  }

  private initForm(): void {
    this.formData = this.fb.group({
      name: new FormControl(this.player ? this.player.name : '', Validators.required),
      surname: new FormControl(this.player ? this.player.surname : '', Validators.required),
      nickName: new FormControl(this.player ? this.player.nickName : ''),
      position: new FormControl(this.player ? this.player.position : '', Validators.required),
      age: new FormControl(this.player ? this.player.age : '', [Validators.required, Validators.min(10)]),
      country: new FormControl(this.player ? this.player.country : ''),
      value: new FormControl(this.player ? this.player.value : ''),
      team: this.fb.group({
        name: new FormControl(this.player ? this.player.team.name : ''),
        nickName: new FormControl(this.player ? this.player.team.nickName : ''),
        city: new FormControl(this.player ? this.player.team.place.city : ''),
        country: new FormControl(this.player ? this.player.team.place.country : '')
      })
    })
  }

  public onClose(): void {
    this.activeModal.close();
  }
}
