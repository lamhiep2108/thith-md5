import {Component, OnInit} from '@angular/core';
import {Player} from '../../module/player';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
  player: Player[] = [];
  players: Player = {
    id: 0,
    name: '',
    champ: '',
    kda: '',
    des: ''
  };
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playerService.getAllPlayer().subscribe((data: Player[]) => {
      this.player = data;
    });
  }

  createPlayer() {
    this.players.name = this.playerForm.value.name;
    this.players.champ = this.playerForm.value.champ;
    this.players.kda = this.playerForm.value.kda;
    this.players.des = this.playerForm.value.des;
    this.playerService.savePlayer(this.player).subscribe(data => {
      this.getAll();
    });
  }
}
