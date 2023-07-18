import React from 'react';
import './App.css';

const App = () => {
  const [myState, setmyState] = React.useState(false);
  const toggleValue = () => {
    setmyState(true);
  }
  return(
    <>
      <p>State: {myState}</p>
      <button onClick={toggleValue}>Toggle value</button>
    </>
  )
}


export default App;
