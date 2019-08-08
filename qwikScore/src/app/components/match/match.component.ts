import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

import { GameDetailsService } from './../../game-details.service';
import { completedGame } from './../../completedGame';
import { incompleteGame } from './../../incompleteGame';
import { SecondryTip } from './../../secondryTip';
import { GetTipsService } from './../../get-tips.service';



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  

  @Input() team1;
  @Input() team2;
  @Input() data;

  @Output() gameDetailsComplete: Array<completedGame> = [];
  @Output() gameDetailsTips: Array<incompleteGame> = []

  constructor(
    private gameDetailsService: GameDetailsService,
    private getTipsService: GetTipsService
  ) { }

  ngOnInit() {}

  ngOnChanges() {
      this.getGameDetails(this.data.startRound, this.data.endRound, this.data.year, this.team1.selectedTeam, this.team2.selectedTeam)
  }

  getGameDetails(startRound: number, endRound: number, year: number, team1: number, team2: number): void {
    if (startRound <= endRound) {
      this.gameDetailsComplete = [];
      this.gameDetailsTips = [];
      for (let i = 0; i - 1 < (endRound - startRound); i++) {
        this.gameDetailsService.getGameDetails((startRound + i), year).subscribe(data => this.checkComplete(data, team1, team2));
      }
    }
  }

  checkComplete(data, team1: number, team2: number): void {
    for (let i = 0; i < data.length; i++) {
      if ((data[0].complete == 100) && (data[data.length - 1].complete == 100)) {
        for (let j = 0; j < data.length; j++) {
          if(team1 == null && team2 == null){
            this.addGame(data[j]);
          } else if (team2 != 0 && team1 == null) {
            if (data[j].ateamid == team2 || data[j].hteamid == team2) {
              console.log("adding game")
              this.addGame(data[j]);
            }
          } else if (team1 != 0 && team2 == null) {
            if (data[j].ateamid == team1 || data[j].hteamid == team1) {
              this.addGame(data[j]);
            }
          } else if (team1 != 0 && team2 != 0) {
            if ((data[j].ateamid == team1 || data[j].hteamid == team1) && 
                (data[j].ateamid == team2 || data[j].hteamid == team2)) {
              this.addGame(data[j]);
            }
          }
        }
        break;
      } else if ((data[i].complete == 0) && (data[data.length - 1].complete == 0)) {
        this.getTipsService.getTips(data[i].round).subscribe(data => this.parseTips(data, team1, team2));
        break;
      }
    }
  }

  parseTips(data, team1, team2): void {
    for (let i = 0; i < data.length; i++) {
      if(team1 == null && team2 == null){
        this.addTip(data[i]);
      } else if (team2 != 0 && team1 == null) {
        if (data[i].ateamid == team2 || data[i].hteamid == team2) {
          this.addTip(data[i]);
        }
      } else if (team1 != 0 && team2 == null) {
        if (data[i].ateamid == team1 || data[i].hteamid == team1) {
          this.addTip(data[i]);
        }
      } else if (team1 != 0 && team2 != 0) {
        if ((data[i].ateamid == team1 || data[i].hteamid == team1) && 
            (data[i].ateamid == team2 || data[i].hteamid == team2)) {
          this.addTip(data[i]);
        }
      }

      
    }
  }

  addGame(data) {
    this.gameDetailsComplete.push(new completedGame(
      data.winnerteamid,
      data.winner,
      data.ateam,
      data.ateamid,
      data.hteam,
      data.hteamid,
      data.venue,
      data.date,
      data.round,
      data.ascore,
      data.agoals,
      data.abehinds,
      data.hscore,
      data.hgoals,
      data.hbehinds));
  }

  addTip(data) {
    if (this.gameDetailsTips.length == 0) {
      this.gameDetailsTips.push(
        new incompleteGame(data.gameid, data.round, data.hteam, data.hteamid, data.ateam, data.ateamid, data.tipteamid, data.tip,
          data.confidence, data.source, data.venue, data.margin, data.date));
    }
    var exists = false;
    for (let j = 0; j < this.gameDetailsTips.length; j++) {

      if ((this.gameDetailsTips[j]).getGameId() == data.gameid) {
        this.gameDetailsTips[j].addSecondryTip(new SecondryTip(data.source, data.tipteamid, data.confidence, data.margin))
        exists = true;
        break;
      }
    }
    if (!exists) {
      this.gameDetailsTips.push(
        new incompleteGame(data.gameid, data.round, data.hteam, data.hteamid, data.ateam, data.ateamid, data.tipteamid, data.tip,
          data.confidence, data.source, data.venue, data.margin, data.date));
    }
  }

  func(){
    console.log(this.gameDetailsComplete);
    console.log(this.gameDetailsTips);
  }
}
