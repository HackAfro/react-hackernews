import React from 'react';
import { withLogout } from '@8base/react-sdk';

const LogoutButton = ({ logout }) => (
  <button onClick={() => logout()}>Login</button>
);

export default withLogout(LogoutButton);
