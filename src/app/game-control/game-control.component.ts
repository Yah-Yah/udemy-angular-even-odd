import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  currentNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.currentNumber++;
      console.log(this.currentNumber);
    }, 1000);
        
  }

  onPause() {
    clearInterval(this.interval);
  }
}
