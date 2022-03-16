import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterValues, setFilter } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filterValues | undefined | string;
  filters: filterValues[] = ['completed', 'all', 'pending'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => this.currentFilter = filter);
  }

  setFilter(filter: filterValues) {
    if (this.currentFilter && this.currentFilter !== filter) {
      this.currentFilter = filter;
      this.store.dispatch(setFilter({filter: this.currentFilter}))
    }
  }

}
