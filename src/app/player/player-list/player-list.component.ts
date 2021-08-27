import {Component, OnInit} from '@angular/core';
import {Player} from '../../module/player';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  player: Player [] = [];

  constructor(private playerService: PlayerService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.playerService.getAllPlayer().subscribe((data: Player[]) => {
      this.player = data;
    });
  }
}
