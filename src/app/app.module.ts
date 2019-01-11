import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersService } from './services/players.service';

import { AppRoutingModule } from './app-routing.module';

import { SettingPageComponent }from './pages/setting/setting-page.component';
import { GamePageComponent  }   from './pages/game/game-page.component';

import { SelectPlayersComponent  } from './components/select-players/select-players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

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
    SettingPageComponent,
    GamePageComponent,
    SelectPlayersComponent,
    AddPlayerComponent 
  ],
  providers: [
    PlayersService
  ],
  entryComponents: [
    AddPlayerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
