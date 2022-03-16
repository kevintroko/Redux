import { ActionReducerMap } from "@ngrx/store";
import { filterValues } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./models/todo.model";
import { createTodoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: Todo[],
    filter: filterValues | string,
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: createTodoReducer,
    filter: filterReducer
}
