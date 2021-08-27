import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../module/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  API = `${environment.API}`;

  constructor(private http: HttpClient) {
  }

  getAllPlayer(): Observable<Player[]> {
    return this.http.get<Player[]>(this.API + '/players');
  }

  savePlayer(player): Observable<Player> {
    return this.http.post(this.API + '/players', player);
  }

  findById(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.API}/players/$(id)`);
  }

  updatePlayer(id: number, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.API}/players/$(id`, player);
  }

  deletePlayer(id: number): Observable<Player> {
    return this.http.delete<Player>(`${this.API}/players/${id}`);
  }
}
