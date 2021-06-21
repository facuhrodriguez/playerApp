import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadCumbI } from 'src/app/shared/interfaces/breadcumb-i';
import { PlayerI } from 'src/app/shared/interfaces/player-i';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private $playerRoute: Observable<string>;
  private playerId: string = '';
  public player: PlayerI | undefined;
  public breadcumbs: BreadCumbI[] = [
    {
      name: 'Home',
      url: '',
      active: false
    },
    {
      name: 'Jugadores',
      url: '/player',
      active: false
    },
    {
      name: 'Detalles',
      url: '#',
      active: true
    }
  ]
  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
    this.$playerRoute = route.params.pipe(map(p => p.id));
  }

  ngOnInit(): void {
    this.$playerRoute.subscribe((player: string) => {
      if (player) {
        this.playerId = player;
        this.loadData();
      }
    },
      (error: Error) => {
        console.log(error);
      })
  }


  private loadData(): void {
    this.playerService.findById(this.playerId).subscribe((player: PlayerI) => {
      console.log("PLAYER", player);
      if (player)
        this.player = player;
    },
      (error: Error) => {
        console.log(error);
      })
  }

}
