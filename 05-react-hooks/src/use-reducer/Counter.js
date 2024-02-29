import React, { useReducer } from 'react'

// what is  pure function ? 
// a function is said to be pure if it returns the same result for the same arguments
// and it has no side effects ( No mutation of state, No API calls, No I/O operations, No Database operations, No File operations, No DOM manipulation, No Math.random() etc. )
function countReducer(state, action) {
    console.log("countReducer");
    let { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            return state + payload;
        case 'DECREMENT':
            return state - payload;
        default:
            return state;
    }
}

export default function Counter() {
    console.log("Counter Rendered");
    const [state, dispatch] = useReducer(countReducer, 100)

    const handleIncrement = () => {
        // console.log("handle Increment");
        const action = { type: 'INCREMENT', payload: 1 };
        dispatch(action);
    };

    const handleDecrement = () => {
        // console.log("handle Decrement");
        const action = { type: 'DECREMENT', payload: 1 };
        dispatch(action);
    };

    const handleIncrementBy10 = () => {
        // console.log("handle Increment by 10");
        const action = { type: 'INCREMENT', payload: 10 };
        dispatch(action);
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3>Counter : useReducer</h3>
            </div>
            <div className='card-body'>
                <h1>{state}</h1>
                <hr />
                <button onClick={handleIncrement} className='btn btn-primary'>Increment</button>
                <button onClick={handleDecrement} className='btn btn-danger'>Decrement</button>
                <button onClick={handleIncrementBy10} className='btn btn-primary'>Increment by 10</button>
            </div>
        </div >
    )
}
