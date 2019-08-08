import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Team} from '../../team';
import {Game} from '../../game';
import {Tip} from '../../tip';
import { TeamNames } from '../../team-names';
import { Score } from 'src/app/score';

@Component({
  selector: 'app-predicted-ladder',
  templateUrl: './predicted-ladder.component.html',
  styleUrls: ['./predicted-ladder.component.css']
})
export class PredictedLadderComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];
  ladder = new Array<Score>();

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    // this.getAFLTeams();
    this.getGames();
    // this.getTips();

    

    }

    // function to return the index of a team taking the name as input
   searchTeam(teamName) {
      return TeamNames.get(teamName) - 1;
    }

  process(): Score[] {

    var ladder = new Array<Score>();

    //setup ladder for each team.
    TeamNames.forEach((value: number, key: string) => {
      ladder.push(new Score(key, 0, 0, 0, 0));
    });

    var hTeam = "";
    var aTeam = "";

    var myYear = 2019;
    var complete = 100;

    // if (undefined !== this.games && this.games.length) {
    for (i = 0; i < this.games.length; i++) {
      //if the game is in from the required year and has been completed
      if (this.games[i].year == myYear && this.games[i].complete == complete) {

        // assign local variabls for home and away team
        hTeam = this.games[i].hteam;
        aTeam = this.games[i].ateam;

        // get the points scored
        var aTeamFor = this.games[i].ascore;
        var hTeamFor = this.games[i].hscore;


        //may not need these variables
        var aTeamAgainst = this.games[i].hscore;
        var hTeamAgainst = this.games[i].ascore;

        // if its a draw add two points to both teams
        if (aTeamFor == hTeamFor) {
          ladder[this.searchTeam(hTeam)].points += 2;
          ladder[this.searchTeam(aTeam)].points += 2;
        }
        // else add 4 points to the winning team
        else if (aTeamFor > hTeamFor) {
          ladder[this.searchTeam(aTeam)].points += 4;
        }
        else {
          ladder[this.searchTeam(hTeam)].points += 4;
        }

        // add the score to calculate percentage
        ladder[this.searchTeam(hTeam)].scored += this.games[i].hscore;
        ladder[this.searchTeam(hTeam)].scoredAgainst += this.games[i].ascore;

        ladder[this.searchTeam(aTeam)].scored += this.games[i].ascore;
        ladder[this.searchTeam(aTeam)].scoredAgainst += this.games[i].hscore;
      }
    }

    // calculate percentage
    for (var i = 0; i <= 17; i++) {
      ladder[i].percentage = (ladder[i].scored / ladder[i].scoredAgainst) * 100;
    }

    // sort teams 
    var sortedTeams = ladder.sort(function (a, b) {
      
      if (a.points == b.points) {

        return a.percentage - b.percentage;
      }
      else {
        return a.points - b.points
      }
    });

    ladder.forEach(function (value) {
    }); 
    // return the sorted teams ascending
    return sortedTeams.reverse();
  }

  process2() {

  this.ladder = this.process();
  var year = 2019;
  var month = 4;
  var day = 14;
  var gameYear = 0;
  var gameMonth = 0;
  var gameDay = 0;
  var futureGame = false;
  var mySource = "Matter of Stats";

  for (var i = 0; i < this.tips.length; i++) {
    gameYear = parseInt(this.tips[i].date.substring(0, 4));
    gameMonth = parseInt(this.tips[i].date.substring(5, 7));
    gameDay = parseInt(this.tips[i].date.substring(8, 10));
    futureGame = gameYear >= year && gameMonth >= month && gameDay >= day;

    if (this.tips[i].source == mySource && futureGame) {
      this.ladder[this.searchTeam(this.tips[i].tip)].points += 4;
    }
  }

  var predictedTeams = this.ladder.sort(function (a, b) {
    if (a.points == b.points) {
      return a.percentage - b.percentage;
    }
    else {
      return a.points - b.points
    }
  });

  return predictedTeams.reverse();
}



  // getAFLTeams(): void {
  //   this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  // }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
    //  this.games = temp;
    this.callTips(temp);
    });
  }

  callTips(temp) {
    this.games = temp;
    this.getTips();
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      this.tips = temp;
      this.ladder = this.process2();
    }); 
  }

}

