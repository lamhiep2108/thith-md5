import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Player} from '../../module/player';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.scss']
})
export class PlayerDeleteComponent implements OnInit {

  id: any;
  playerForm: FormGroup;
  player: Player = {
    id: 0,
    name: '',
    champ: '',
    kda: '',
    des: ''
  };

  constructor(private playerService: PlayerService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
    this.activateRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getPlayer(this.id);
  }

  private getPlayer(id: number) {
    this.playerService.findById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des),
      });
    });

  }

  delete(id: number) {
    console.log(id);
    this.playerService.deletePlayer(id).subscribe(data => {
      this.router.navigate(['']);
    });
  }

}
