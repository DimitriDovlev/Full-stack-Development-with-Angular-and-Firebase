import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../interfaces/team';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(teamArray: Team[], filterValue: string): Team[] {
    let filteredTeamData: Team[] = [];
    // console.log('pipe: ', teamArray);

    filteredTeamData = teamArray.filter(
      (team: Team) => team.conference == filterValue
    );
    return filteredTeamData;
  }
}
