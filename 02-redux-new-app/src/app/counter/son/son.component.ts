import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [],
})
export class SonComponent {
  @Input() counter: number | undefined;
  @Output() counterEmitter = new EventEmitter<number>();

  multiply() {
    if (!this.counter) {
      return;
    }

    this.counter *= 2;
    this.counterEmitter.emit(this.counter);
  }

  divide() {
    if (!this.counter) {
      return;
    }
    
    this.counter /= 2;
    this.counterEmitter.emit(this.counter);
  }
}
