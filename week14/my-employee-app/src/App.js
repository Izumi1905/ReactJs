import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './component/Login';
import Home from './page/Home';

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