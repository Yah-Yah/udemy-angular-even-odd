import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  currentNumber = 0;
  @Output() counting = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.currentNumber++;
      this.counting.emit(this.currentNumber);
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
