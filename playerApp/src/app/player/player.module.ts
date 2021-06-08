import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerService } from './services/player.service';
import { CrudComponent } from './pages/crud/crud.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    CrudComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
