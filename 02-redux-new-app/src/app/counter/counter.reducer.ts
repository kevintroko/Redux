import { Action, createReducer, on } from "@ngrx/store";
import { decrease, increment } from "./counter.actions";

export const initialState = 0;

const _counterReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrease, state => state - 1),
);

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}