import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PlayerComponent } from './components/player/player.component';
import { FilterByAbbreviationPipe } from './pipes/filter-by-abbreviation.pipe';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    FilterPipe,
    PlayerComponent,
    FilterByAbbreviationPipe,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
