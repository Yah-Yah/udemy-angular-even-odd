import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'even-odd';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounting(currentNumber: number) {
    if (currentNumber % 2 === 0) {
      this.evenNumbers.push(currentNumber);      
    } else {
      this.oddNumbers.push(currentNumber);
    }
  }
}
