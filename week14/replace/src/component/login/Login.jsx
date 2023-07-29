import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = ({handleLogin}  ) => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      if (values.email === 'admin@gmail.com' && values.password === 'letmein') {
        handleLogin();
      } else {
        alert("Email hoặc password không đúng. Vui lòng nhập lại!");
      }
      setSubmitting(false);
      
    }, 500);
  };
  const initialValues = { email: "", password: "" };


  // const onSubmit = ({ username, password }) => {
  //   if (username === "tuyen@gmail.com" && password === "123") {
  //     alert("Login thành công!");
  //   } else {
  //     alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
  //   }
  // };
  
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username">{(msg) => <div>{msg}</div>}</ErrorMessage>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password">{(msg) => <div>{msg}</div>}</ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik> */}
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i><FontAwesomeIcon  icon={faEnvelope} /></i>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email">{(msg) => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className="input-field">
                    <i><FontAwesomeIcon icon={faLock} /></i>
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password">{(msg) => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  {/* <button type="submit" className="btn solid" disabled={isSubmitting}>
                    Login
                  </button> */}
                  <button type="submit"  className="btn solid" disabled={isSubmitting}> Login {isSubmitting ? "Logging in..." : "Login"} </button>
                  <p className="social-text">Or Sign in with social platforms</p>
                  <div className="social-media">
                    <a href="https://genshin-impact-map.appsample.com/" className="social-icon">
                    <i><FontAwesomeIcon icon="fa-brands fa-facebook" /> </i>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=enkanomiya" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=chasm" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />    
                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=veluriyam-mirage" className="social-icon">
                    <FontAwesomeIcon  icon={faLinkedinIn} />   
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
            {({isSubmitting}) => (
              <Form className="sign-up-form">
                <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i><FontAwesomeIcon  icon={faUser} /></i>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username">{(msg) => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className="input-field">
                    <i><FontAwesomeIcon  icon={faEnvelope} /></i>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email">{(msg) => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className="input-field">
                    <i><FontAwesomeIcon  icon={faLock} /></i>
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password">{(msg) => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  <button type="submit" className="btn" disabled={isSubmitting}>
                    Sign up
                  </button>
                  <p className="social-text">Or Sign up with social platforms</p>
                  <div className="social-media">
                    <a href="https://genshin-impact-map.appsample.com/" className="social-icon">
                      <FontAwesomeIcon  icon={faFacebookF} />                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=enkanomiya" className="social-icon">
                      <FontAwesomeIcon  icon={faTwitter} />
                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=chasm" className="social-icon">
                      <FontAwesomeIcon  icon={faGoogle}/>                    </a>
                    <a href="https://genshin-impact-map.appsample.com/?map=veluriyam-mirage" className="social-icon">
                      <FontAwesomeIcon  icon={faLinkedinIn} />                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
      </div>

      {/* <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div> */}
    </div>

    </>    
  );
};


export default Login;