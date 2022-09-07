import { EventEmitter, Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { Stats } from '../interfaces/stats';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class BasketballService {
  constructor() {}
  teamEmitter = new EventEmitter<Team[]>();
  playerEmitter = new EventEmitter<Player[]>();
  statsEmitter = new EventEmitter<Stats[]>();

  fetchAllTeams() {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then((response) => response.json())
      .then((data) => {
        const teamData: Team[] = data.data;
        this.teamEmitter.emit(teamData);
      });
  }
  fetchPlayer() {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => response.json())
      .then((data) => {
        const playerData: Player[] = data.data;
        this.playerEmitter.emit(playerData);
      });
  }
  fetchStats() {
    fetch('https://www.balldontlie.io/api/v1/stats')
      .then((response) => response.json())
      .then((data) => {
        const statsData: Stats[] = data.data;
        this.statsEmitter.emit(statsData);
        console.log(statsData);
        
      });
  }
}
