// api/get.js

export default function handler(req, res) {
    const prediction = {
      competition: "Premier League",
      match: "Liverpool vs Manchester City",
      overUnder: {
        "Over 2.5 Goals": 75,
        "Under 2.5 Goals": 25,
      },
      btts: {
        "Yes": 80,
        "No": 20,
      },
      outcome: {
        "Team 1 Win": 45,
        "Draw": 30,
        "Team 2 Win": 25,
      },
      highestBet: "BTTS Yes",
    };
  
    res.status(200).json(prediction);
  }
