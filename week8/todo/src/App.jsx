import './App.css';
import React from 'react';

const App = () =>{
  const [list, setList] = React.useState([]);
  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  }

  const handleAddItem = () => {
    if(item !== ''){
      const newList = list.concat(item);
      setList(newList);
      setItem('');
    }
  };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
              <h1>Todo List</h1>
              <input
                type="text"
                className="form-control"
                placeholder="Enter todo item"
                value={item}
                onChange={handleChange}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
            <ul className="list-group">
              {list.map((item, index) => (
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }


export default App;


