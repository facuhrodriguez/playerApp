import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerService } from './services/player.service';
import { CrudComponent } from './pages/crud/crud.component';
import { ListComponent } from './pages/list/list.component';
import { ModalCreateComponent } from './modals/modal-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CrudComponent,
    ListComponent,
    ModalCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
