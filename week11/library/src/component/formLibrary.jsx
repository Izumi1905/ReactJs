import React from 'react';
import { Formik } from 'formik';

import PropTypes from 'prop-types';

const BookForm = ({ onSubmit, indexSelected, initialValues }) => {
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
    
    return (
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={onSubmit}
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
    );
  };
  
  BookForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    indexSelected: PropTypes.number.isRequired,
    initialValues: PropTypes.shape({
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  
export default BookForm;