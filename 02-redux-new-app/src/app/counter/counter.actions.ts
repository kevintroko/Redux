import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrease = createAction('[Counter Component] Decrease');

export const multiply = createAction(
    '[Counter Component] Multiply',
    props<{counter: number}>()
);

export const divide = createAction(
    '[Counter Component] Divide',
    props<{counter: number}>()
);
