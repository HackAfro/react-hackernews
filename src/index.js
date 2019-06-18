import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, WebAuth0AuthClient } from '@8base/react-sdk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URI = 'https://api.8base.com/cjvp33au9000201ru4hupd7r5';
const AUTH_CLIENT_ID = '48r59uLZdFgc55CdeJyt0yGaX1V2aLNR';
const AUTH_DOMAIN = 'secure.8base.com';

const auth0WebClient = new WebAuth0AuthClient({
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/`,
});

ReactDOM.render(
  <AppProvider
    uri={URI}
    authClient={auth0WebClient}
    onRequestError={() => {}}
    onRequestSuccess={(e) => {console.log(e)}}
  >
    {({ loading }) => {
      if (loading) {
        return <p>Please wait...</p>;
      }
      return <App />;
    }}
  </AppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
