import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent {
  name: string = '';
  eMail: string;

  constructor(private playersService: PlayersService,
    public dialogRef: MatDialogRef<AddPlayerComponent>) {}

  // add new player
  add() {
    if (this.checkName() && this.checkEmail()) {
      // close a add player modal dialog 
      this.dialogRef.close();
      this.playersService.addPlayer(this.name, this.eMail);
    } else {
      console.log('Something wrong');
    }
  }

  // check name length
  checkName() {
    if (this.name.length > 0 && this.name.length < 20) {
      console.log(this.name.length);
      return true;
    } else {
      console.log('Name is incorrect');
      return false;
    }
  }

  // check e-mail with regExp
  checkEmail() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.eMail) || !this.eMail) { // reg is true or don't put eMail 
      return true;
    } else {
      console.log('eMail is incorrect');
      return false;
    }
  }
}
