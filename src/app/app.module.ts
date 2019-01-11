import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersService } from './services/players.service';

import { AppRoutingModule } from './app-routing.module';

import { SettingPage }from './pages/setting/setting-page.component';
import { GamePage }   from './pages/game/game-page.component';

import { SelectPlayers} from './components/select-players/select-players.component';
import { AddPlayer} from './components/add-player/add-player.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    SettingPage,
    GamePage,
    SelectPlayers,
    AddPlayer
  ],
  providers: [
    PlayersService
  ],
  entryComponents: [
    AddPlayer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
