import React, { useState } from 'react';
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [form, setForm] = useState({ email: "", password: "", isRemember: false });
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    checkValidForm();
  };

  const handleChangeCheckbox = () => {
    setForm((prevForm) => ({
      ...prevForm,
      isRemember: !prevForm.isRemember,
    }));
    checkValidForm();
  };

  const checkValidForm = () => {
    const { email, password } = form;
    const value = email && password;
    setIsValid(value);
  };

  const handleSubmit = () => {
    if (isValid) {
      setIsLoggedIn(true);
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Home onLogOut={handleLogOut} />;
  }

  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              className="form-control email"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={handleChange}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control password"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                checked={form.isRemember}
                onChange={handleChangeCheckbox}
              />{' '}
              Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="button"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
};

export default App;
