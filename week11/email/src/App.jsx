import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

const App = () => {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [form, setForm] = useState({})

  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value
    setForm({ ...form, [event.target.name]: value })
  }

  const handleValidate = values => {
    let errors = {}

    if (!values.email || !values.email.trim()) {
      errors.email = 'Required'
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.title || !values.title.trim()) {
      errors.title = 'Required'
    }

    return errors
  }

  const handleSubmit = () => {
    alert('Thêm liên hệ thành công!')
  }

  return (
    <div className="container">
      <h1>Thêm liên hệ</h1>
      <Formik
        initialValues={form}
        onSubmit={handleSubmit}
        validate={handleValidate}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className={errors.email ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={values.email || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="custom-input">
              <label htmlFor="name">Họ và tên</label>
              <input type="text" name="name" value={values.name || ''} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="custom-input">
              <label htmlFor="title">Tiêu đề</label>
              <input type="text" name="title" value={values.title || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div className="custom-input">
              <label htmlFor="content">Nội dung</label>
              <textarea name="content" value={values.content || ''} onChange={handleChange} onBlur={handleBlur}></textarea>
            </div>
            <button type="submit">Thêm liên hệ</button>
          </form>
        )}
      </Formik>
    </div>
  )
}


export default App;
