import './App.css';
import React from 'react';

function useIncrement(addAmount){
  const [count, setCount] = React.useState(0);
  
  function increase(){
    setCount(previousCount => previousCount + addAmount);
  }
  return [count, increase];
}

function Counter() {
  const [count1, increase1] = useIncrement(1);
  const [count2, increase2] = useIncrement(10);

  return (
    <div>
      <div>
        <h2>Counter 1: {count1}</h2>
        <button onClick={increase1}>Increase 1</button>
      </div>
      <div>
        <h2>Counter 2: {count2}</h2>
        <button onClick={increase2}>Increase 5</button>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;