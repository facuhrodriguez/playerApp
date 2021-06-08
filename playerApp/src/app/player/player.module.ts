import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerService } from './services/player.service';
import { CrudComponent } from './pages/crud/crud.component';
import { ListComponent } from './pages/list/list.component';
import { ModalCreateComponent } from './modals/modal-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent,
    ListComponent,
    ModalCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
