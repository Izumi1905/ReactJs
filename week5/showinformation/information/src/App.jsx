import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <h4>Browser's details: {navigator.userAgent}</h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
