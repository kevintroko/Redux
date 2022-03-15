import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { createTodo } from "./todo.action";

export const initialState: Todo[] = [];

const _createTodoReducer = createReducer(initialState,
    on(createTodo, (state, { text }) => [...state, new Todo(text)]),
);

export function createTodoReducer(state: any, action: Action) {
    return _createTodoReducer(state, action);
}