import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    const newForm = { ...form };
    newForm[event.target.name] = event.target.value;
    setForm(newForm);
    checkInvalidForm(newForm);
  };

  const handleSelect = (studentSelected, index) => {
    setForm(studentSelected);
    setIndexSelected(index);
  };

  const checkInvalidForm = (newForm) => {
    const { name, phone, email } = newForm;
    setIsValid(name && phone && email);
  };

  const handleSubmit = () => {
    if (isValid) {
      const newList = [...studentList];
      if (indexSelected > -1) {
        // Cập nhật giá trị student trong studentList
        newList.splice(indexSelected, 1, form);
      } else {
        // Thêm mới student vào studentList
        newList.push(form);
      }
      // Cập nhật lại giá trị state
      setStudentList(newList);
      setForm({ name: '', phone: '', email: '' });
      setIsValid(false);
      setIndexSelected(-1);
    }
  };

  const handleDelete = (index) => {
    // Lấy danh sách student
    const newList = [...studentList];
    // Xoá student với index đã chọn
    newList.splice(index, 1);
    // Cập nhật lại state với danh sách student mới
    setStudentList(newList);
  };

  return (
    <div>
      <div>
        <h1>Student List</h1>
        <div>
          <label>Name: </label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
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