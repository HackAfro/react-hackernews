import React from 'react';
import { Route } from 'react-router-dom';

// TODO -- 1 import AuthCallback component
import AuthCallback from './authCallback';
import Home from './components/home';
import PostForm from './components/submit';

// TODO -- 2 Create new route to complete authentication
const Routes = () => (
  <>
    <Route path="/submit" exact component={PostForm} />
    <Route path="/" exact component={Home} />
  </>
);

export default Routes;
