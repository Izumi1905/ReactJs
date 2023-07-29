import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './component/login/Login';
import Home from './component/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Login/> ),
  },
  {
    path: '/about',
    element: (<Home />),
  },
]);

export default router