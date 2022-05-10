import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){} 
  ngOnInit(): void {
  }
  gamerO!: string;
  gamerX!: string;
  @Output() sendRequestToFather = new EventEmitter<Array<string>>();

  onGame(el1: any, el2: any){
    this.gamerO = el1;
    this.gamerX = el2;
    this.sendRequestToFather.emit([this.gamerO, this.gamerX]);
    }
    
  }

  


