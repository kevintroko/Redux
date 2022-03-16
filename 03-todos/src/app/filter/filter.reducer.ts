import { Action, createReducer, on } from "@ngrx/store";
import { filterValues, setFilter } from "./filter.actions";

export const initialState: filterValues = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, { filter }) => {
        console.log(filter);

        return 'all';
    }),
);

export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}