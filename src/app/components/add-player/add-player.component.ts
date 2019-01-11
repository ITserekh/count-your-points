import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayer {
  name: string = '';
  eMail: string;

  constructor(private playersService: PlayersService,
    public dialogRef: MatDialogRef<AddPlayer>) {}

  add() {
    if (this.checkName() && this.checkEmail()) {
      console.log('here');
      this.dialogRef.close();
      this.playersService.addPlayer(this.name, this.eMail);
    } else {
      console.log('Sonething wrong');
    }
  }

  checkName() {
    if (this.name.length > 0 && this.name.length < 20) {
      console.log(this.name.length);
      return true;
    } else {
      console.log('Name is incorrect');
      return false;
    }
  }

  checkEmail() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.eMail) || !this.eMail) {
      return true;
    } else {
      console.log('eMail is incorrect');
      return false;
    }
  }
}
