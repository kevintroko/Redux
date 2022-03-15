import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [],
})
export class SonComponent implements OnInit {
  counter: number | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: number) => this.counter = counter);
  }

  divide(): void {
    this.store.dispatch(actions.divide({ counter: 2 }));
  }

  multiply(): void {
    this.store.dispatch(actions.multiply({ counter: 2 }));
  }
}
