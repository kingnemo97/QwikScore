import { Component, OnInit, Input } from '@angular/core';
import { completedGame } from '../../../completedGame';
import { NameTeams } from '../../../name-teams';


@Component({
  selector: 'app-complete-game',
  templateUrl: './complete-game.component.html',
  styleUrls: ['./complete-game.component.css']
})
export class CompleteGameComponent implements OnInit {

  @Input() CompleteGame: completedGame;
  nameTeams: Map<number, string> = NameTeams;
  @Input() index;
  
  constructor() { }

  ngOnInit() {
  }

  

}
