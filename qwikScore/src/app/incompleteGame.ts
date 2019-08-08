import { SecondryTip } from './secondryTip';

export class incompleteGame {
    gameId: number;
    round: number;
    hTeam: string;
    hTeamId: number;
    aTeam: string;
    aTeamId: number;
    tipTeamId: number;
    tip: string;
    confidence: number;
    source: string;
    venue: string;
    margin: number;
    date: string;
    secondryTips: Array<SecondryTip> = []

    constructor(
        gameId: number,
        round: number,
        hTeam: string,
        hTeamId: number,
        aTeam: string,
        aTeamId: number,
        tipTeamId: number,
        tip: string,
        confidence: number,
        source: string,
        venue: string,
        margin: number,
        date: string
    ) {  
        this.gameId = gameId;
        this.round = round;
        this.hTeam = hTeam;
        this.hTeamId = hTeamId;
        this.aTeam = aTeam;
        this.aTeamId = aTeamId;
        this.tipTeamId = tipTeamId;
        this.tip = tip;
        this.confidence = confidence;
        this.source = source;
        this.venue = venue;
        this.margin = margin;
        this.date = date;
      }

    addSecondryTip(secondryTip: SecondryTip): void{
        this.secondryTips.push(secondryTip);
    }

    getGameId(): number {
        return this.gameId;
    }
}