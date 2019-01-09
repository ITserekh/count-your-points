import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingPage }   from './pages/setting/setting-page.component';
import { GamePage }   from './pages/game/game-page.component';

// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/setting', pathMatch: 'full' },
  { path: 'setting', component: SettingPage },
  { path: 'game', component: GamePage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
