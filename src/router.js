import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthCallback from './authCallback';
import Home from './components/home';
import PostForm from './components/submit';

const Routes = () => (
  <>
    <Route path="/" exact render={() => <Redirect to="/app" />} />
    <Route path="/submit" exact component={PostForm} />
    <Route path="/auth/callback" exact component={AuthCallback} />
    <Route path="/app" exact component={Home} />
  </>
);

export default Routes;
