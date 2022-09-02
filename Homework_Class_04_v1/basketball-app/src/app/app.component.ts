import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from './interfaces/player';
import { Stats } from './interfaces/stats';
import { Team } from './interfaces/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'basketball-app';
  public teamData: Team[];
  public playerData: Player[];
  public statsData: Stats[];
  public playerAbbreviation: string;
  public teamToDisplay: string = 'West';
  public teamAbbreviation: string = 'asd';

  ngOnInit(): void {
    console.log('On Init');

    this.fetchTeams();
    this.fetchStats();
  }

  renderTeam() {
    if (this.teamToDisplay == 'West') {
      this.teamToDisplay = 'East';
    } else if (this.teamToDisplay == 'East') {
      this.teamToDisplay = 'West';
    }
  }

  fetchTeams() {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then((response) => response.json())
      .then((data) => {
        this.teamData = data.data;
        console.log(this.teamData);
      });
  }

  fetchPlayer() {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => response.json())
      .then((data) => {
        this.playerData = data.data;
        console.log(this.playerData);
      });
  }

  fetchStats() {
    fetch('https://www.balldontlie.io/api/v1/stats')
      .then((response) => response.json())
      .then((data) => {
        this.statsData = data.data;
      });
  }
  onClickTeamAbbreviation(eventData: string) {
    this.playerAbbreviation = eventData;
    this.fetchPlayer();
  }
}
