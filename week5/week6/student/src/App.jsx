import React from 'react';
import './App.css';
import './component/StudentInfoComponent';
import students from './component/StudentInfoComponent';

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

}

export default App;
