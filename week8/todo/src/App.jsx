import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handleAddItem = () => {
    if (this.state.item !== '') {
      const newList = this.state.list.concat(this.state.item);
      this.setState({
        list: newList,
        item: '',
      });
    }
  }

  render() {
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
                value={this.state.item}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handleAddItem}
              >
                Add
              </button>
            </div>
            <ul className="list-group">
              {this.state.list.map((item, index) => (
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
}

export default App;
