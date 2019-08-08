export class completedGame {
    winnerTeamId: number;
    winner: string;
    aTeam: string;
    aTeamId: number;
    hTeam: string;
    hTeamId: number;
    venue: string;
    date: string;
    round: string;
    aScore: number;
    aGoals: number;
    aBehinds: number;
    hScore: number;
    hGoals: number;
    hBehinds: number;

    constructor(
        winnerTeamId: number,
        winner: string,
        aTeam: string,
        aTeamId: number,
        hTeam: string,
        hTeamId: number,
        venue: string,
        date: string,
        round: string,
        aScore: number,
        aGoals: number,
        aBehinds: number,
        hScore: number,
        hGoals: number,
        hBehinds: number
    ) {
        this.winnerTeamId = winnerTeamId;
        this.winner = winner;
        this.aTeam = aTeam;
        this.aTeamId = aTeamId;
        this.hTeam = hTeam;
        this.hTeamId = hTeamId;
        this.venue = venue;
        this.date = date;
        this.round = round;
        this.aScore = aScore;
        this.aGoals = aGoals;
        this.aBehinds = aBehinds;
        this.hScore = hScore;
        this.hGoals = hGoals;
        this.hBehinds = hBehinds;
    }

}