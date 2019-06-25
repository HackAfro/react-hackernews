import React from 'react';
import { NavLink } from 'react-router-dom';

// TODO -- 1 Add auth imports
import './index.css';

// TODO -- 2 - Add user query
const USER_QUERY = ``;

// TODO -- 4 - Utilise props provided by enhancers
const Header = () => {
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
      {/* TODO -- 5 - Check for auth state of the user before making query*/}
      <div className="auth">
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      </div>
    </header>
  );
};

// TODO -- 3 - Wrap component with withAuth enhancer 
export default Header;
