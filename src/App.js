import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function App() {
    const counterValue = useSelector(state => state.counter.value)
    console.log(counterValue,'value')
    const dispatch = useDispatch()
    return (
        <div>
          <h1>Counter Value: {counterValue}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default App
