import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-new-app';
  counter: number = 0;

  constructor () {
    this.counter = 10;
  }

  increment(): void {
    console.log(this.counter);
    
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
