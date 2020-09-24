import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, SignUp } from 'Pages';

const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/signup" component = { SignUp } />
    </Switch>
  );
}

export default PageRouter;
