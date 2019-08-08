import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-two-selector',
  templateUrl: './team-two-selector.component.html',
  styleUrls: ['./team-two-selector.component.css']
})
export class TeamTwoSelectorComponent implements OnInit {

  selectedTeam = 0;

  constructor() { }

  ngOnInit() {
  }

  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();


  onClick(){
    this.emitter.emit({
      selectedTeam: this.selectedTeam
    })
  }

}
