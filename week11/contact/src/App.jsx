import './App.css';
import {Formik } from 'formik';
import React from 'react';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const App = () => {
  const [form, setForm] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidate = (values) => {
    let errors ={};
    if(!values.name){
      errors.name = 'Required';
    }

    if(!values.email){
      errors.email = 'Required';
    }
    else if(!REGEX.email.test(values.email)){
      errors.email = 'Invalid email address';
    }

    if(!values.phone){
      errors.phone = 'Required';
    }

    if(!values.message){
      errors.message = 'Required';
    }

    return errors;
  }

  const handleSubmit = () => {
    alert("Add contact successfully!!!");
  }

  return (
    <>
    <div className="App">
      <h1>Contact form</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' , message: ''}}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name ? 'custom-input-error' : ''}`}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className={`custom-input ${errors.email ? 'custom-input-error' : ''}`}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className={`custom-input ${errors.phone ? 'custom-input-error' : ''}`}>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className={`custom-input ${errors.Message ? 'custom-input-error' : ''}`}>
              <label htmlFor="phone">Message *</label>
              <textarea name="message" id="message" cols="20" rows="5" value={values.message}
                onChange={handleChange}>
              </textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
    </>
  );
}

export default App;



