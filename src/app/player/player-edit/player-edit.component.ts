import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Player} from '../../module/player';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {
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
      this.getPlayer(this.id);
    });
  }

  ngOnInit() {
  }

  edit() {
    this.player.name = this.playerForm.value.name;
    this.player.champ = this.playerForm.value.champ;
    this.player.kda = this.playerForm.value.kda;
    this.player.des = this.playerForm.value.des;
    this.playerService.updatePlayer(this.id, this.player).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  private getPlayer(id: number) {
    this.playerService.findById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des),
      });
    });

  }
}
