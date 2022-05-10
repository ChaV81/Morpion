import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Gamer} from './models/gamer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Morpion';
  formVisibility = "block";
  gameVisibility = "none";
  gamerO: Gamer | undefined;
  gamerX: Gamer | undefined;
  constructor(private router:Router){} 
  letsPlay(name: any) {   
    if(name[0] != '' && name[1] != '') {
      this.formVisibility = "none";
      this.gameVisibility = "block";
      this.gamerO = new Gamer(name[0]);
      this.gamerX = new Gamer(name[1]);
    }
    else {
      alert("Veuillez compléter les pseudos des jours.");
    }
  }
  
  
}
