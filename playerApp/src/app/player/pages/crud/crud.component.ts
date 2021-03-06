import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PlayerI } from 'src/app/shared/interfaces/player-i';
import { ModalCreateComponent } from '../../modals/modal-create.component';
import { PlayerService } from '../../services/player.service';
import { faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BreadCumbI } from 'src/app/shared/interfaces/breadcumb-i';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public players: PlayerI[] = [];
  public breadCumb: BreadCumbI[] = [{
    url: '',
    name: 'Home',
    active: false
  },
  {
    url: '/player',
    name: 'Jugador',
    active: true
  }]
  public trashIcon: IconDefinition = faTrash;
  public faEdit: IconDefinition = faEdit;
  public isLoading: boolean = true;
  constructor(private playerService: PlayerService, private router: Router, private modalCreate: NgbModal) { }

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

  public onMoreDetails(playerId: string = ""): void {
    if (playerId != "")
      this.router.navigateByUrl(`/player/${playerId}`);
  }

  public onDeletePlayer(playerId: string = ""): void {
    if (playerId != "") {
      this.isLoading = true;
      this.playerService.deleteById(playerId).subscribe(() => {
        this.loadData();
      },
        (error: Error) => {
          console.log(error);
        })
    }

  }

  public onEditPlayer(player: PlayerI): void {
    const modalCreate: NgbModalRef = this.modalCreate.open(ModalCreateComponent, { size: 'lg' });
    modalCreate.componentInstance.setPlayer(player);
    modalCreate.result.then((playerData: PlayerI) => {
      if (playerData) {
        this.isLoading = true;
        this.playerService.updateById(player._id, playerData).subscribe(() => {
          this.loadData();
          // @TODO: Add Toast config
        },
          (error: Error) => {
            console.log(error);
          })
      }
    })
  }

  public onAddPlayer(): void {
    const modalCreate: NgbModalRef = this.modalCreate.open(ModalCreateComponent, { size: 'lg' });
    modalCreate.result.then((playerData: PlayerI) => {
      if (playerData) {
        this.isLoading = true;
        this.playerService.create(playerData).subscribe((newPlayer: PlayerI) => {

          this.loadData();
          // @TODO: Add Toast config
        },
          (error: Error) => {
            console.log(error);
          })
      }
    })
  }

}
