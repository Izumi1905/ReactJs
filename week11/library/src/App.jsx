import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [indexSelected, setIndexSelected] = useState(-1);
  const [isValid, setIsValid] = useState(false);

  const handleValidate = (values) => {
    let errors = {};
    
    if (!values.title) {
      errors.title = 'Required';
    }

    if (!values.quantity) {
      errors.quantity = 'Required';
    }

    return errors;
  };

  const handleSelect = (studentSelected, index) => {
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newList = [...books];
    newList.splice(index, 1);
    setBooks(newList);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { title, quantity } = values;
    const newBooks = { title, quantity };
    const newList = [...books];
    if (indexSelected > -1) {
      newList.splice(indexSelected, 1, newBooks);
    } else {
      newList.push(newBooks);
    }
    setBooks(newList);
    resetForm();
    setIndexSelected(-1);
  };  

  return (
    <div className="container">
      <h1>Library</h1>
      <Formik
        initialValues={{ title: '', quantity: '' }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.title ? 'custom-input-error' : ''}`}>
              <label>Tiêu đề </label>
              <input type="text" name="title" value={values.title} onChange={handleChange} />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div className={`custom-input ${errors.quantity ? 'custom-input-error' : ''}`}>
              <label>Số lượng </label>
              <input type="number" name="quantity" value={values.quantity} onChange={handleChange} />
              {errors.quantity && <p className="error">{errors.quantity}</p>}
            </div>
            <button type="submit">{indexSelected > -1 ? 'Update' : 'Add'}</button>
          </form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td className="width-auto">{book.title}</td>
              <td>{book.quantity}</td>
              <td className="flex">
                <button onClick={() => handleSelect(book, index)} type="button">Edit</button>
                <button onClick={() => handleDelete(index)} type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;





