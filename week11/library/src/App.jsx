import React, { useState } from 'react';
import "./App.css";
import FormLibrary from './component/formLibrary';
import BookList from './component/BookList';
function App() {
  const [books, setBooks] = useState([]);
  const [indexSelected, setIndexSelected] = useState(-1);
  const [isValid, setIsValid] = useState(false);

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

  const initialValues = { title: '', quantity: '' };

  const handleSelect = (bookSelected, index) => {
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newList = [...books];
    newList.splice(index, 1);
    setBooks(newList);
  };
   
   
  return (
    <div className="container">
      <h1>Library</h1>
      <FormLibrary
        onSubmit={handleSubmit}
        indexSelected={indexSelected}
        initialValues={initialValues}
      />
      <BookList
        books={books}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;





