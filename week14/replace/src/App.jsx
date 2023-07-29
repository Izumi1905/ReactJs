// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './component/login/Login';
// import Home from './component/home/Home';
// import React from 'react';
// const App = () => {
//   const isLogin = false;
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         {
//           !isLogin ? <Navigate to="/home" /> : <Route path="/home" element={<Home />} />
//         }
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import LoginForm from "./page/Login";
import { useSelector } from "react-redux";
const App = () => {
  const isLogin = useSelector((state) => state.login);
  console.log(isLogin);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginForm />} />
          {isLogin ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/*" element={<LoginForm />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
