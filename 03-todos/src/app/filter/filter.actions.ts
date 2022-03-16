import { createAction, props } from "@ngrx/store";

export type filterValues = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filter] Set filter',
    props<{  filter: filterValues }>(),
);
