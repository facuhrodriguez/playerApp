import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerService } from './services/player.service';
import { CrudComponent } from './pages/crud/crud.component';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
