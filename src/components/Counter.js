import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    return (
        <div>
            <h1>Counter App</h1>

            <h3>Count: {count}</h3>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;


// 1. state - count : 0;
// 2. action - increment, decrement, reset
// 3. reducer - increment -> count =>count + 1
// - decrement -> count =>count - 1
// - reset -> count => 0
// 4. store