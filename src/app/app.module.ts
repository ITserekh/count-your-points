import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SettingPage }from './pages/setting/setting-page.component';
import { GamePage }   from './pages/game/game-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SettingPage,
    GamePage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
