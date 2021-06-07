import { Component, OnInit } from '@angular/core';
import { PlayerI } from 'src/app/shared/interfaces/player-i';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public players: PlayerI[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.playerService.findAll().subscribe((players: PlayerI[]) => {
      if (players) {
        this.players = players;
      }
    },
      (error: Error) => {
        console.log(error);
      })
  }


}
