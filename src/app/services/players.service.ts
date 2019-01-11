import {Player} from './player';
 
export class PlayersService{
 
    private players: Player[] = [
      { name: 'Sherlock Holmes', eMail: 'sherlock.holmes@gmail.com' },
      { name: 'Dr. John Watson', eMail: 'dr.john.watson@gmail.com' },
      { name: 'Mrs. Stubs', eMail: 'stubbs@gmail.com' },
      { name: 'Jim Moriarty', eMail: 'jim.moriarty@gmail.com' }
    ];

    getPlayers(): Player[] {
      return this.players;
    }

    deletePlayer(player: Player) {
      // find item index of players array for delete
      let index: number = this.players.findIndex((item) => player === item);
      // delete a one item with index from players list
      this.players.splice(index, 1);
    }

    addPlayer(name: string, eMail: string) {
      this.players.push({name: name, eMail: eMail});
    }
}
