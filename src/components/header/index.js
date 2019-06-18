import React from 'react';
import { NavLink } from 'react-router-dom';
import { withAuth } from '@8base/react-sdk';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LogoutButton from './logout';
import './index.css';

const USER_QUERY = gql`
  query UserQuery {
    user {
      id
      email
    }
  }
`;

const Header = ({ auth: { isAuthorized, authorize } }) => {
  return (
    <header id="news-header">
      <section>
        <b className="brand">
          <NavLink to="/">Hacker News</NavLink>
        </b>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">News | </NavLink>
            </li>
            <li>
              <NavLink to="/submit">Submit</NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div className="auth">
        {isAuthorized ? (
          <Query query={USER_QUERY}>
            {(user) => {
              return (
                <div>
                  <div>{isAuthorized} yes</div> <LogoutButton />
                </div>
              );
            }}
          </Query>
        ) : (
          <div>
            <button onClick={() => authorize()}>Login</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default withAuth(Header);
