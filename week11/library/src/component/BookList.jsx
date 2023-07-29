import React from 'react';
import PropTypes from 'prop-types';


  const BookList = ({ books, handleSelect, handleDelete }) => (
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
  );
  
  BookList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };
  
export default BookList;