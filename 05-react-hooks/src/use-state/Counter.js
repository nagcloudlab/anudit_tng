import React, { useState } from 'react'

export default function Counter() {
    console.log("Counter Rendered");
    const [state, setState] = useState(100)

    const handleIncrement = () => {
        // console.log("handle Increment");
        // setCount(count + 1)
        setState(prevState => prevState + 1)
    };

    const handleDecrement = () => {
        // console.log("handle Decrement");
        // setCount(count - 1)
        setState(prevState => prevState - 1)
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <h3>Counter : useState</h3>
            </div>
            <div className='card-body'>
                <h1>{state}</h1>
                <hr />
                <button onClick={handleIncrement} className='btn btn-primary'>Increment</button>
                <button onClick={handleDecrement} className='btn btn-danger'>Decrement</button>
            </div>
        </div >
    )
}
