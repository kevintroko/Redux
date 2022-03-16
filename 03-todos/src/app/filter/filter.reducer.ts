import { Action, createReducer, on } from "@ngrx/store";
import { filterValues, setFilter } from "./filter.actions";

export const initialState: filterValues | string = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, { filter }) => {
        console.log(state, filter);
        return filter;
    }),
);

export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}