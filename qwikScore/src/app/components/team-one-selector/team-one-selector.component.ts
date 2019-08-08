import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-one-selector',
  templateUrl: './team-one-selector.component.html',
  styleUrls: ['./team-one-selector.component.css']
})
export class TeamOneSelectorComponent implements OnInit {

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
