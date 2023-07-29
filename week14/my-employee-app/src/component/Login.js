import React, { useState } from 'react';

const Login = () => {
  // State lưu giá trị của input email và password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý sự kiện khi thay đổi giá trị input email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // Hàm xử lý sự kiện khi thay đổi giá trị input password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  // Hàm xử lý sự kiện khi submit form login
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (email === 'admin@gmail.com' && password === 'letmein') {
      this.history.push('/home');
    } else {
      alert('Lỗi vui lòng nhập lại')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;