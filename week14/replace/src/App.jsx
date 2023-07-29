
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



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import Home from './component/home/Home';
import LoginForm from './page/Login';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}
export default App;

