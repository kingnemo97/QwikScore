import { NameTeams } from './name-teams';

export class SecondryTip{
    source: string;
    tipTeamId: number;
    confidence: number;
    margin: number;
    tipName: string;

    constructor(source: string, tipTeamId: number, confidence: number, margin: number){
        this.source = source;
        this.tipTeamId = tipTeamId;
        this.confidence = confidence;
        this.margin = margin;
        this.tipName = NameTeams.get(tipTeamId);
    }
}