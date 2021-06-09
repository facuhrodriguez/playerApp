import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { PlayerI } from '../../shared/interfaces/player-i';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url: string = endpoints.BASE_URL + endpoints.PLAYER;
  constructor(private http: HttpClient) {

  }


  public findAll(): Observable<PlayerI[]> {
    const subject = new Subject<PlayerI[]>();
    this.http.get<PlayerI[]>(this.url).subscribe((players: PlayerI[]) => {
      subject.next(players);
    },
      (error: Error) => {
        subject.error(error);
      },
      () => {
        subject.complete();
      })

    return subject.asObservable();
  }


  public findById(playerId: string): Observable<PlayerI> {
    const subject = new Subject<PlayerI>();
    this.http.get<PlayerI>(this.url + `${playerId}`).subscribe((player: PlayerI) => {
      subject.next(player);
    },
      (error: Error) => {
        subject.error(error);
      },
      () => {
        subject.complete();
      })

    return subject.asObservable();
  }

  public create(playerData: PlayerI): Observable<PlayerI> {
    const subject = new Subject<PlayerI>();
    this.http.post<PlayerI>(this.url, { playerData }).subscribe((playerData: PlayerI) => {
      subject.next(playerData);
    },
      (error: Error) => {
        subject.error(error);
      },
      () => {
        subject.complete();
      })

    return subject.asObservable();
  }

  public deleteById(_id: string): Observable<void> {
    const subject = new Subject<void>();
    this.http.delete(this.url + `${_id}`).subscribe(() => {
      subject.next();
    },
      (error: Error) => {
        subject.error(error);
      },
      () => {
        subject.complete();
      })

    return subject.asObservable();
  }

}
