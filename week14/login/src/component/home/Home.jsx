import React from "react";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Xin chào, {user.email}</h1>
      <p>Bạn đã đăng nhập thành công. Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!</p>
    </div>
  );
};

export default Home;