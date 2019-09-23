import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string;

  min = 0;
  sec = 0;
  ms = 0;

  timeInterval;

  constructor() {
  }

  ngOnInit() {

  }

  timeStart() {
    this.timeInterval = setInterval(() => {

      this.ms++;
    }, 10);

    clearInterval();
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //
  //   console.log(changes);
  //   for (const propName in changes) {
  //     if (propName === 'inputData') {
  //
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }

}
