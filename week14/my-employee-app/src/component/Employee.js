import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('your-api-url')
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDetail = (id) => {
    // TODO: Xử lý khi nhấn vào nút detail của nhân viên
  }

  return (
    <div>
      <h1>Danh sách nhân viên</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee =>
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => handleDetail(employee.id)}>Detail</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;