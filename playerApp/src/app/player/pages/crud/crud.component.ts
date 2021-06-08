import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerI } from 'src/app/shared/interfaces/player-i';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public players: PlayerI[] = [];
  public isLoading: boolean = true;
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.playerService.findAll().subscribe((players: PlayerI[]) => {
      if (players) {
        this.players = players;
      }
      this.isLoading = false;

    },
      (error: Error) => {
        console.log(error);
      })
  }

  public onMoreDetails(playerId: string): void {
    this.router.navigateByUrl(`/player/${playerId}`);
  }

  public onDelete(playerId: string): void {
    this.playerService.deleteById(playerId).subscribe(() => {
      this.loadData();
    },
      (error: Error) => {
        console.log(error);
      })
  }

}
