import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import MustLogin from "./middlewares/MustLogin";
import routes from "./routes";
const router = createBrowserRouter([
    {
      path: '/',
      element: <MustLogin> <Home/> </MustLogin>,
    },
    {
      path: routes.web.component.login,
      element: <Login />,
    },


  ]);
  
  export default router