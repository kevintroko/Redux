import { incrementAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

class Store<T> {    
    constructor(private reducer: Reducer<T>, private state: T) {}

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(counterReducer, 0);

console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
