import { Component, OnInit } from '@angular/core';
import { Player } from './interfaces/player';
import { Stats } from './interfaces/stats';
import { Team } from './interfaces/team';
import { BasketballService } from './services/basketball.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'basketball-app';
  teamData: Team[];
  playerData: Player[];
  statsData: Stats[];
  teamToDisplay: string = 'West';
  teamAbbreviation: string;

  constructor(private basketballService: BasketballService) {}

  ngOnInit() {
    this.basketballService.fetchAllTeams();
    this.basketballService.teamEmitter.subscribe((teamData) => {
      this.teamData = teamData;
    });
    this.fetchStats();
  }
  renderTeam() {
    if (this.teamToDisplay == 'West') {
      this.teamToDisplay = 'East';
    } else if (this.teamToDisplay == 'East') {
      this.teamToDisplay = 'West';
    }
  }
  fetchPlayer() {
    //   fetch('https://www.balldontlie.io/api/v1/players')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.playerData = data.data;
    //     });
    this.basketballService.fetchPlayer();
    this.basketballService.playerEmitter.subscribe((playerData) => {
      this.playerData = playerData;
    });
  }
  fetchStats() {
    this.basketballService.fetchStats();
    this.basketballService.statsEmitter.subscribe((statsData) => {
      this.statsData = statsData;
    });
  }
  onClickTeamAbbreviation(eventData: string) {
    this.teamAbbreviation = eventData;
    this.fetchPlayer();
  }
}
