import React from 'react';
import './App.css';


const carList = ['Audi', 'BMW', 'Mercedes'];
const colorList = ['Red', 'Blue', 'Green'];

function CarSelector() {
  const [selectedCar, setSelectedCar] = React.useState({car: carList[0], color: colorList[0]});

  const handleCarChange = (event) => {
    setSelectedCar(previousState => {
      return {...previousState, car: event.target.value};
    });
  };

  const handleColorChange = (event) => {
    setSelectedCar(previousState => {
      return {...previousState, color: event.target.value};
    });
  };

  return (
    <div>
      <div>
        <label>Car:</label>
        <select value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>{car}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <p>You have selected a {selectedCar.color} {selectedCar.car}.</p>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Car Selector</h1>
      <CarSelector />
    </div>
  );
}

export default App;
