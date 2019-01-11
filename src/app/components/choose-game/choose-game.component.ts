import { Component } from '@angular/core';

@Component({
  selector: 'choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.scss'],
})
export class ChooseGameComponent {
  games: string[] = ['501', '301'];
  selectedGame: string;

  choose(game: string, event: any) {
    this.selectedGame = game;
  }
}
