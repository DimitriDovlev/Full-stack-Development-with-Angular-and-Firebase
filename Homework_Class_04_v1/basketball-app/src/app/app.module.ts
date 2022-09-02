import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterByAbbreviationPipe } from './pipes/filter-by-abbreviation.pipe';
import { PlayerComponent } from './components/player/player.component';
import { StatsComponent } from './components/stats/stats.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    FilterPipe,
    FilterByAbbreviationPipe,
    PlayerComponent,
    StatsComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
