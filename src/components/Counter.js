import React from 'react';

const Counter = () => {
    return (
        <div>
            <h1>Counter App</h1>

            <h3>Count: 0</h3>
            <button>Increment</button>
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