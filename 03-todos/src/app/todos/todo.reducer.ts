import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { completeAllTodo, createTodo, deleteTodo, editTodo, toggleTodo } from "./todo.action";

export const initialState: Todo[] = [
    new Todo('Learn ngrx'),
    new Todo('Check docker'),
    new Todo('Check react'),
];

const _createTodoReducer = createReducer(initialState,
    on(createTodo, (state, { text }) => [...state, new Todo(text)]),
    on(toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });
    }),

    on(editTodo, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                }
            } else {
                return todo;
            }
        });
    }),

    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(completeAllTodo, (state, { completed }) => state.map(
        (todo: Todo) =>({
            ...todo,
            completed,
        })
    )),
);

export function createTodoReducer(state: any, action: Action) {
    return _createTodoReducer(state, action);
}