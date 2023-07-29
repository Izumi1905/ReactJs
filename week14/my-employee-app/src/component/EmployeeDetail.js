import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDetail = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`your-api-url/${match.params.id}`)
      .then(res => {
        setEmployee(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.id]);

  if (!employee) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Thông tin chi tiết: {employee.name}</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
    </div>
  );
}

export default EmployeeDetail;