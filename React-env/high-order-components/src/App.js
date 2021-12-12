import React from 'react';
import Counter from './Counter';

function App(props) {
  return (
    <div>
      <h2>Clock is ticking for {props.counter} seconds</h2>
    </div>
  )
}

export default Counter(Math.random() * 1000 + 1000)(App)
