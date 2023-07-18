import './App.css';
import React, {useState}from 'react';
import { Formik } from 'formik';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};




const App = () => {
  const SEX_LIST = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' }
  ]
  
  
  const [form, setForm] = useState({});
  
  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value
    setForm({ ...form, [event.target.name]: value })
  }
  
  const handleValidate = values => {
    let errors = {}
  
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.number) {
      errors.number = 'Required'
    }
    if (!values.birthyear || values.birthyear < 1900) {
      errors.birthyear = 'Invalid birth year'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
  
    return errors
  }
  
  const handleSubmit = () => {
    alert('Khai báo thành công!')
  }
  
  return (
    <>
    <div className="container">
      <h1>Khai báo thông tin y tế</h1>
      <Formik
        initialValues={form}
        onSubmit={handleSubmit}
        validate={handleValidate}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className={errors.name ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="name">Họ tên</label>
              <input type="text" name="name" value={values.name || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className={errors.number ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="number">Số hộ chiếu /CMND</label>
              <input type="text" name="number" value={values.number || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.number && <p className="error">{errors.number}</p>}
            </div>
            <div className={errors.birthyear ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="birthyear">Năm sinh</label>
              <input type="number" name="birthyear" value={values.birthyear || ''} min={1900} max={new Date().getFullYear()} onChange={handleChange} onBlur={handleBlur} />
              {errors.birthyear && <p className="error">{errors.birthyear}</p>}
            </div>
            <div className="custom-input">
              <label htmlFor="sex">Giới tính</label>
              <select name="sex" value={values.sex || ''} onChange={handleChange}>
                <option value=""></option>
                {SEX_LIST.map(item => (
                  <option value={item.value} key={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
            <div className="custom-input">
              <label htmlFor="nationality">Quốc tịch</label>
              <input type="text" name="nationality" value={values.nationality || ''} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="custom-input">
              <label htmlFor="company">Công ty làm việc</label>
              <input type="text" name="company" value={values.company || ''} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="custom-input">
              <label htmlFor="department">Bộ phận làm việc</label>
              <input type="text" name="department" value={values.department || ''} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="custom-input">
              <label htmlFor="insurance">Có thẻ bảo hiểm y tế</label>
              <input type="checkbox" name="insurance" checked={values.insurance || false} onChange={handleChange} />
            </div>
            <h2>Địa chỉ</h2>
            <div className={errors.province ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="province">Tỉnh thành</label>
              <input type="text" name="province" value={values.province || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.province && <p className="error">{errors.province}</p>}
            </div>
            <div className={errors.district ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="district">Quận / huyện</label>
              <input type="text" name="district" value={values.district || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.district && <p className="error">{errors.district}</p>}
            </div>
            <div className={errors.ward ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="ward">Phường / xã</label>
              <input type="text" name="ward" value={values.ward || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.ward && <p className="error">{errors.ward}</p>}
            </div>
            <div className={errors.address ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="address">Số nhà, phố, tổ dân phố / thôn / đội</label>
              <textarea name="address" value={values.address || ''} onChange={handleChange} onBlur={handleBlur}></textarea>
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <h2>Thông tin liên hệ</h2>
            <div className={errors.phone ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="phone">Điện thoại</label>
              <input type="text" name="phone" value={values.phone || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className={errors.email ? 'custom-input custom-input-error' : 'custom-input'}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={values.email || ''} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <p className="error">{errors.email}</p>}
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
