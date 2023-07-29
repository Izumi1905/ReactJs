import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './component/login/Login';
import Home from './component/home/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;