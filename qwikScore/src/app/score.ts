export class Score {
    public name: string;
    public points: number;
    public scored: number;
    public scoredAgainst: number;
    public percentage: number;

    constructor (name: string,
                points: number,
                scored: number,
                scoredAgainst: number,
                percentage: number) {

                    this.name = name;
                    this.points = points;
                    this.scored = scored;
                    this.scoredAgainst = scoredAgainst;
                    this.percentage = percentage;

                }
        

}
