import { Action } from "@ngrx/store";
import { decrease, increment } from "./counter.actions";

export const counterReducer =  (state: number = 10, action: Action) => {
    switch (action.type) {
        case increment.type:
            return state + 1;
        case decrease.type:
            return state - 1;
        default:
            return state;
    }
}