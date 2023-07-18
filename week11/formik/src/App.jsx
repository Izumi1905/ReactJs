import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

const App = () => {

  const [studentList, setStudentList] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleValidate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  const handleSelect = (studentSelected, index) => {
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone, email } = values;
    const newStudent = { name, phone, email };
    const newList = [...studentList];
    if (indexSelected > -1) {
      newList.splice(indexSelected, 1, newStudent);
    } else {
      newList.push(newStudent);
    }
    setStudentList(newList);
    resetForm();
    setIndexSelected(-1);
  };

  return (
    <div>
      <div>
        <h1>Student List</h1>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            email: '',
          }}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name: </label>
                <input name="name" value={values.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                <label>Phone: </label>
                <input
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div>
                <label>Email: </label>
                <input name="email" value={values.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleSelect(student, index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;