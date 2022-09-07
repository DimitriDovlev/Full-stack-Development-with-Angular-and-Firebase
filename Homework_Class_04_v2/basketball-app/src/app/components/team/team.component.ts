import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() teamData: Team;
  @Output() emitTeamAbbreviation = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  teamAbbreviation() {
    this.emitTeamAbbreviation.emit(this.teamData.abbreviation);
  }
}
