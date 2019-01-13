import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { Player} from '../../services/player';
import { PlayersService } from '../../services/players.service';
import { Game501Service } from '../../services/game501.service'
import { Throw } from '../../services/throw';
import { ShowWinnerComponent } from '../show-winner/show-winner.component';


@Component({
  selector: 'throws',
  templateUrl: './throws.component.html',
  styleUrls: ['./throws.component.scss']
})
export class ThrowsComponent {
  players: Player[];
  throws: Throw[] = [];
  gameOver: boolean = false;

  constructor(private playersService: PlayersService,
    private game: Game501Service,
    private dialog: MatDialog) {}

  ngOnInit() {
    this.players = this.playersService.getPlayers();
    
    this.game.initGame();

    this.addNewThrow();
  }

  addNewThrow() {
    const numberPlayers = this.players.length;
    this.throws = [];
    for (let number = 0; number < numberPlayers; number++) {
      this.throws.push(new Throw);
    }
  }

  addMove() {
    const winners: number[] = this.game.doMove(this.throws);

    // 
    if (winners.length > 0) {
      this.gameOver = true;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.hasBackdrop = true;
      dialogConfig.width = '400px';
      dialogConfig.data = {
        winners: winners
      }
      this.dialog.open(ShowWinnerComponent, dialogConfig);
    }
    
    this.addNewThrow();
  }
  
  // check real numbers of darts target
  checkPoint(currentThrow: Throw, numberDart: any, points: any) {
    const reg = /^[0-9]*$/;
    const previuosValue = currentThrow[numberDart][0];
    let condition: boolean = false;
    if (reg.test(points.value)) {
      if (points.value.length <= 2) {
        const tmpPoints = Number(points.value);
        if (tmpPoints <= 20 || tmpPoints === 25 || tmpPoints === 50) {
          currentThrow[numberDart][0] = tmpPoints;
          this.selectMultiplier(currentThrow, numberDart, 1);
          condition = true;
        }
      }
    } 
    if (!condition) {
      if (previuosValue === 0) {
        points.value = '';
      } else {
        points.value = previuosValue;
      }
    }
  }

  selectMultiplier(currentThrow: Throw, numberDart: any, multipler: number) {
    if (this.isBullEye(currentThrow[numberDart][0])) {
      currentThrow[numberDart][1] = 1;
    } else {
      currentThrow[numberDart][1] = multipler;
    }
  }

  isBullEye(points: number): boolean {
    if (points === 25 || points === 50) {
      return true;
    } else {
      return false;
    }
  }
}
