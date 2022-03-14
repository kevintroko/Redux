import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [
  ]
})
export class GrandsonComponent {
  @Input() counter: number | undefined;
  @Output() change = new EventEmitter<number>();

  reset() {
    this.counter = 0;
    this.change.emit(this.counter);
  }
}
