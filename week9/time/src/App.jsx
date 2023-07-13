import React from 'react';

function Timer() {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(previousTimer => previousTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Countdown Timer: {timer}</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Timer App</h1>
      <Timer />
    </div>
  );
}


export default App;
