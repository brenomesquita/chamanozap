import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import webChat from '../pages/webchat';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ webChat } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
