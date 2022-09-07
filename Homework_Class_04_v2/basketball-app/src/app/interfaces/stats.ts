import { Game } from './game';
import { Player } from './player';
import { Team } from './team';

export interface Stats {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: any;
  fg3a: number;
  fg3m: number;
  fg_pct: any;
  fga: number;
  fgm: number;
  ft_pct: any;
  fta: number;
  ftm: number;
  game: Game;
  min: string;
  oreb: number;
  pf: number;
  player: Player;
  pts: number;
  reb: number;
  stl: number;
  team: Team;
  turnover: number;
}

// {
//     "id":29,
//     "ast":2,
//     "blk":2,
//     "dreb":8,
//     "fg3_pct":0.25,
//     "fg3a":4,
//     "fg3m":1,
//     "fg_pct":0.429,
//     "fga":21,
//     "fgm":9,
//     "ft_pct":0.8,
//     "fta":5,
//     "ftm":4,
//     "game":{
//       "id":1,
//       "date":"2018-10-16T00:00:00.000Z",
//       "home_team_id":2,
//       "home_team_score":105,
//       "season":2018,
//       "visitor_team_id":23,
//       "visitor_team_score":87
//     },
//     "min":"36:49",
//     "oreb":2,
//     "pf":3,
//     "player":{
//       "id":145,
//       "first_name":"Joel",
//       "last_name":"Embiid",
//       "position":"F-C",
//       "team_id":23
//     },
//     "pts":23,
//     "reb":10,
//     "stl":1,
//     "team":{
//       "id":23,
//       "abbreviation":"PHI",
//       "city":"Philadelphia",
//       "conference":"East",
//       "division":"Atlantic",
//       "full_name":"Philadelphia 76ers",
//       "name":"76ers"
//     },
//     "turnover":5
//   },
