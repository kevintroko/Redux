import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/todo.model';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @ViewChild('inputP') inputP: ElementRef | undefined;

  completedCheck: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();

  editing: boolean = false;

  constructor (private store: Store<AppState>) {}

  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo?.completed);
    this.txtInput = new FormControl(this.todo?.text, Validators.required);

    this.completedCheck.valueChanges.subscribe(value => {
      console.log(value);
      this.store.dispatch(actions.toggleTodo({
        id: this.todo?.id || 0
      }));
    })
  }

  edit() {
    this.editing = true
    setTimeout(() => this.inputP?.nativeElement.select(), 1);
  }

  finishEdit() {
    this.editing = false;
  }
}
