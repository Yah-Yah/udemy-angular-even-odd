import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      console.log("hi");      
    }, 1000);
        
  }

  onPause() {
    clearInterval(this.interval);
  }
}
