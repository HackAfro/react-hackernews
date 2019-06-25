import React from 'react';
import ReactDOM from 'react-dom';

// TODO -- 1

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URI = 'YOUR_8BASE_URI';

// TODO -- 2
const AUTH_CLIENT_ID = 'YOUR_AUTH_CLIENT_ID';
const AUTH_DOMAIN = 'YOUR_AUTH_DOMAIN';

// TODO -- 3 - Setup Auth client
const client = new ApolloClient({
  uri: URI
});

// TODO -- 4 - Replace Apollo provider with 8base provider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
