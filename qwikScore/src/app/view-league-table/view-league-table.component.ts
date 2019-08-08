import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;}); 
  }
}
