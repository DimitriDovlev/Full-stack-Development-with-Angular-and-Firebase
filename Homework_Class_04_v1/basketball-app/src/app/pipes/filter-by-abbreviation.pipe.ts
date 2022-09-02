import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../interfaces/player';

@Pipe({
  name: 'filterByAbbreviation',
})
export class FilterByAbbreviationPipe implements PipeTransform {
  transform(playerArray: Player[], filterValue: string): Player[] {
    let filteredPlayerData: Player[] = [];
    filteredPlayerData = playerArray.filter(
      (player: Player) => player.team.abbreviation === filterValue
    );
    return filteredPlayerData;
  }
}
