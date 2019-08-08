import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();

  startRound = 1;
  endRound = 1;
  year = "2017";

  dataChanged(event) {
    console.log("Event changed");
    this.emitter.emit({
      startRound: this.startRound,
      endRound: this.endRound,
      year: this.year
    })
  }

options: Options = {
  floor: 1,
  ceil: 23,
  showTicks: true,
  translate: (value: number): string => {
    return 'Round ' + value;
  }
};
  // year2017: boolean = false;
  // year2018: boolean = false;
  // year2019: boolean = true;


  // @Output() notify: EventEmitter<any> = new EventEmitter<any>();


  
  // pickRound(): void {
  //   this.notify.emit({ 
  //     startRound: this.startRound, 
  //     endRound: this.endRound,
  //     changeRound: true 
  //   });
  // }

  // pickRound2017(): void {
  //   this.notify.emit({
  //     year2017: !this.year2017,
  //     year2018: this.year2018,
  //     year2019: this.year2019,
  //   });
  // }

  // pickRound2018(): void {
  //   this.notify.emit({ 
  //     year2017: this.year2017,
  //     year2018: !this.year2018,
  //     year2019: this.year2019 
  //   });
  // }

  // pickRound2019(): void {
  //   this.notify.emit({ 
  //     year2017: this.year2017,
  //     year2018: this.year2018,
  //     year2019: !this.year2019 
  //   });
  // }
}
