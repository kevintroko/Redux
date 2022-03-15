import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';

export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-new-app';
  counter: number = 0;

  constructor (private store: Store<AppState>) {
    // Select will chose which field you want to listen
    this.store.select('counter').subscribe((counter: number) => {
      console.log(counter);

      this.counter = counter;
    });
  }

  increment(): void {
    this.store.dispatch(actions.increment());
  }

  decrement(): void {
    this.store.dispatch(actions.decrease());
  }
}
