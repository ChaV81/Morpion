import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from './game/game.component';
import {HomeComponent} from './home/home.component';

const APP_ROUTING: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'game', component: GameComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING); 

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
