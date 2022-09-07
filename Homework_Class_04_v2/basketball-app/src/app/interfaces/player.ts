import { Team } from './team';
export interface Player {
  id: number;
  first_name: string;
  height_feet: string;
  height_inches: string;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds: number | null;
}

// {
//     "id": 14,
//     "first_name": "Ike",
//     "height_feet": null,
//     "height_inches": null,
//     "last_name": "Anigbogu",
//     "position": "C",
//     "team": {
//       "id": 12,
//       "abbreviation": "IND",
//       "city": "Indiana",
//       "conference": "East",
//       "division": "Central",
//       "full_name": "Indiana Pacers",
//       "name": "Pacers"
//     },
//     "weight_pounds": null
//   },
