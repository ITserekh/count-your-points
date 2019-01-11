import { Component, OnInit } from '@angular/core';

import { Player} from '../../services/player';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'select-players',
  templateUrl: './select-players.component.html',
  styleUrls: ['./select-players.component.scss'],
  providers: [PlayersService,]
})
export class SelectPlayers {
  term: string = ''; // for storage a search query of player 
  players: Player[]; // players array to rendering list

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    // get list of players under init this component
    this.players = this.playersService.getPlayers();
  }

  delete(player: Player): void {
    this.playersService.deletePlayer(player);
  }

  // call when input a seraach query
  showItem(player: Player) {
    // check player name contains search query
    const nameCondition = player.name.toLowerCase().indexOf(this.term.toLowerCase()) > -1;
    // check player email contains search query
    const eMailCondition = player.eMail.toLowerCase().indexOf(this.term.toLowerCase()) > -1;
    // return true if somewhere is a match
    return (nameCondition || eMailCondition);
  }
}
