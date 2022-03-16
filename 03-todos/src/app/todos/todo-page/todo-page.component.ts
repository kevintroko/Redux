import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  completed = false;

  constructor(private store: Store<AppState>) {
    // EMPTY
  }

  toggleAll() {
    console.log('click');
    this.completed = !this.completed;
    this.store.dispatch(actions.completeAllTodo({ completed: this.completed}));
  }
}
