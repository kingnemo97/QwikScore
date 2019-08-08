import { Component, OnInit, Input } from '@angular/core';
import { incompleteGame } from '../../../incompleteGame';
import { NameTeams } from '../../../name-teams';

@Component({
  selector: 'app-incomplete-game',
  templateUrl: './incomplete-game.component.html',
  styleUrls: ['./incomplete-game.component.css']
})
export class IncompleteGameComponent implements OnInit {
  
  @Input() IncompleteGame : incompleteGame;
  @Input() index;
  nameTeams: Map<number, string> = NameTeams;

  constructor() { }

  ngOnInit() {
  }

}
