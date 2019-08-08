import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Team} from '../../team';
import {Game} from '../../game';
import {Tip} from '../../tip';
import { TeamNames } from '../../team-names';
import { Score } from 'src/app/score';

@Component({
  selector: 'app-current-ladder',
  templateUrl: './current-ladder.component.html',
  styleUrls: ['./current-ladder.component.css']
})
export class CurrentLadderComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];
  ladder = new Array<Score>();

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    // this.getTips();
      }

  process(): Score[] {

    var ladder = new Array<Score>();

    //setup ladder for each team.
    TeamNames.forEach((value: number, key: string) => {
      ladder.push(new Score(key, 0, 0, 0, 0));
    });

    // function to return the index of a team taking the name as input
    function searchTeam(teamName) {
      return TeamNames.get(teamName) - 1;
    }


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
          ladder[searchTeam(hTeam)].points += 2;
          ladder[searchTeam(aTeam)].points += 2;
        }
        // else add 4 points to the winning team
        else if (aTeamFor > hTeamFor) {
          ladder[searchTeam(aTeam)].points += 4;
        }
        else {
          ladder[searchTeam(hTeam)].points += 4;
        }

        // add the score to calculate percentage
        ladder[searchTeam(hTeam)].scored += this.games[i].hscore;
        ladder[searchTeam(hTeam)].scoredAgainst += this.games[i].ascore;

        ladder[searchTeam(aTeam)].scored += this.games[i].ascore;
        ladder[searchTeam(aTeam)].scoredAgainst += this.games[i].hscore;
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



  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;
     this.ladder = this.process();
    });
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;}); 
  }

}
