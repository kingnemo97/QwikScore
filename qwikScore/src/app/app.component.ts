import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // gameDetailsComplete: Array<completedGame> = [];
  // gameDetailsTips: Array<incompleteGame> = []

  // startRound: number = 6;
  // endRound: number = 6;
  // year2017: boolean = false;
  // year2018: boolean = false;
  // year2019: boolean = true;

  title = 'qwikScore';

  @Output() data = "";
  @Output() team1 = "";
  @Output() team2 = "";

  
  // onNotifyEvent(value: any): void {

  //   console.log(value);
  //   if (value.changeRound == true) {
  //     this.startRound = value.startRound;
  //     this.endRound = value.endRound;
  //   } else {
  //     this.year2017 = value.year2017;
  //     this.year2018 = value.year2018;
  //     this.year2019 = value.year2019;
  //   }
  //   // this.getGameDetails(this.startRound, this.endRound, this.year2017, this.year2018, this.year2019);
  // }

  // getGameDetails(startRound: number, endRound: number, year2017: boolean, year2018: boolean, year2019: boolean): void {
  //   if (startRound <= endRound) {
  //     this.gameDetailsComplete = [];
  //     this.gameDetailsTips = [];
  //     for (let i = 0; i - 1 < (endRound - startRound); i++) {
  //       this.gameDetailsService.getGameDetails((startRound + i), year2017, year2018, year2019).subscribe(data => this.checkComplete(data));
  //     }
  //   }
  // }

  // checkComplete(data): void {
  //   for (let i = 0; i < 9; i++) {
  //     if ((data[0].complete == 100) && (data[8].complete == 100)) {
  //       for (let j = 0; j < 9; j++) {
  //         this.gameDetailsComplete.push(new completedGame(
  //           data[i].winnerTeamId,
  //           data[i].aTeamId,
  //           data[i].hTeamId,
  //           data[i].venue,
  //           data[i].aScore,
  //           data[i].aGoals,
  //           data[i].aBehinds,
  //           data[i].hScore,
  //           data[i].hGoals,
  //           data[i].hBehinds));
  //       }
  //       break;
  //     } else if ((data[i].complete == 0) && (data[8].complete == 0)) {
  //       this.getTipsService.getTips(data[i].round).subscribe(data => this.parseTips(data));
  //       break;
  //     }
  //   }
  // }

  // parseTips(data): void {
  //   for (let i = 0; i < data.length; i++) {
  //     if (this.gameDetailsTips.length == 0) {
  //       this.gameDetailsTips.push(
  //         new incompleteGame(data[i].gameid, data[i].hteamid, data[i].ateamid,
  //           data[i].confidence, data[i].source, data[i].venue, data[i].margin));
  //     }
  //     var exists = false;
  //     for (let j = 0; j < this.gameDetailsTips.length; j++) {

  //       if ((this.gameDetailsTips[j]).getGameId() == data[i].gameid) {
  //         this.gameDetailsTips[j].addSecondryTip(new SecondryTip(data[i].source, data[i].tipteamid, data[i].confidence, data[i].margin))
  //         exists = true;
  //         break;
  //       }
  //     }
  //     if (!exists) {
  //       this.gameDetailsTips.push(
  //         new incompleteGame(data[i].gameid, data[i].hteamid, data[i].ateamid,
  //           data[i].confidence, data[i].source, data[i].venue, data[i].margin));
  //     }
  //   }
  // }

  // funct(): void {
  //   console.log(this.gameDetailsTips);
  // }
}
