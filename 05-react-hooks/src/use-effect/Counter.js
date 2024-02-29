import React, { useState, useEffect } from 'react'


/*
    what is effect ?

    => low-level DOM manipulation 
    => fetching data from an API    
    => setting up subscriptions
    => manually changing the document title
    => adding event listeners
    => setting up timers
    => logging to the console
    ....

    when to exexute effect ?

    => on initial render
    => on every render
    => on specific state or prop changes
    => on component unmount


*/

export default function Counter() {
    console.log("Counter Rendered");
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [count1, setCount1] = useState(100)
    const [count2, setCount2] = useState(200)

    useEffect(() => {
        console.log("start timer effect");
        const intervalId = setInterval(() => {
            console.log("tick");
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            console.log("clean up");
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        console.log("count1 effect");
        document.title = `Count1 : ${count1}`
    }, [count1])

    useEffect(() => {
        console.log("count2 effect");
        console.log(`Count2 : ${count2}`)
    }, [count2])

    useEffect(() => {
        console.log("count1 and count2 effect");
        if (count1 % 2 === 0 && count2 % 2 === 0) {
            console.log(`Count1 : ${count1} and Count2 : ${count2}`)
        }
    }, [count1, count2])



    const handleIncrementCount1 = () => {
        setCount1(prevCount => prevCount + 1)
    };

    const handleIncrementCount2 = () => {
        setCount2(prevCount => prevCount + 1)
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <h3>Counter : useEffect</h3>
            </div>
            <div className='card-body'>

                <hr />
                Time : {time}
                <hr />
                <div>
                    <button onClick={handleIncrementCount1} className='btn btn-primary'>Increment count-1</button>
                    count-1: {count1}</div>
                <hr />
                <div>
                    <button onClick={handleIncrementCount2} className='btn btn-danger'>Increment count-2</button>
                    count-2: {count2}
                </div>
            </div>
        </div >
    )
}
