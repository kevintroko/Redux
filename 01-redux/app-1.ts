// Actions 
interface Action {
    type: string;
    payload?: any;
}

enum ACTIONS {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
}

/* --- Must always return state --- */
const reducer = (state = 10, action: Action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.DECREMENT:
            return state - 1;
        case ACTIONS.MULTIPLY: 
            return state * action.payload;
        case ACTIONS.DIVIDE: 
            return state / action.payload;
        default: 
            return state;
    }
}

const incrementAction: Action = {
    type: ACTIONS.INCREMENT,
};

const decrementAction: Action = {
    type: ACTIONS.DECREMENT,
};

console.log(reducer(0, incrementAction));
console.log(reducer(0, decrementAction));
console.log(reducer(4, {
    type: ACTIONS.MULTIPLY,
    payload: 2,
}));
console.log(reducer(4, {
    type: ACTIONS.DIVIDE,
    payload: 2,
}))