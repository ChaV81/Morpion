import { Component, OnInit, Input } from '@angular/core';
import {ConfigGameService} from '../config-game.service'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private configGameService:ConfigGameService) { }
  ngOnInit(): void {
  }
  event = 0
  playGame(idCell: any){
    this.configGameService.play(this.event++, idCell);
    this.configGameService.matchNull();
    this.configGameService.didIWin();
  }

}
