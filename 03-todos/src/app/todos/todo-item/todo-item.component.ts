import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

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

  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo?.completed);
    this.txtInput = new FormControl(this.todo?.text, Validators.required);
  }

  edit() {
    this.editing = true
    setTimeout(() => this.inputP?.nativeElement.select(), 1);
  }

  finishEdit() {
    this.editing = false;
  }
}
