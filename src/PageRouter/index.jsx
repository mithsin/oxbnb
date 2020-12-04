import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ProjectDetail, SignUp, Verify } from 'Pages';

const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/project-detail" component = { ProjectDetail } />
        <Route exact path="/signup" component = { SignUp } />
        <Route exact path="/verify-account" component = { Verify } />
    </Switch>
  );
}

export default PageRouter;
