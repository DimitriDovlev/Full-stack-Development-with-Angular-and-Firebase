export interface Game {
  id: number;
  date: Date;
  home_team_id: number;
  home_team_score: number;
  season: number;
  visitor_team_id: number;
  visitor_team_score: number;
}

// "game":{
//       "id":1,
//       "date":"2018-10-16T00:00:00.000Z",
//       "home_team_id":2,
//       "home_team_score":105,
//       "season":2018,
//       "visitor_team_id":23,
//       "visitor_team_score":87
//     },
