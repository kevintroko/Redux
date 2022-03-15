import { Action, createReducer, on } from "@ngrx/store";
import { decrease, divide, increment, multiply, reset } from "./counter.actions";

export const initialState = 0;

const _counterReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrease, state => state - 1),
    on(multiply, (state, { counter }) => state * counter),
    on(divide, (state, { counter }) => state / counter),
    on(reset, () => 0),

);

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}