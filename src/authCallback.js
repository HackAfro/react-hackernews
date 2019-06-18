import React, { useEffect } from 'react';
import { withAuth } from '@8base/react-sdk';
import { withApollo, compose } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER = gql`
  query currentUser {
    user {
      id
    }
  }
`;

const SIGN_UP_USER = gql`
  mutation userSignUp($user: UserCreateInput!) {
    userSignUp(user: $user) {
      id
      email
    }
  }
`;

const AuthCallback = ({ auth, history, client }) => {
  console.log(auth, history, client)
  console.log('here');
  useEffect(() => {
    const completeAuth = async () => {
      const { idToken, email } = await auth.getAuthorizedData();
      console.log(email);
      try {
        console.log('attempting login in here');

        // Check if user exists, if not it'll return an error
        const user = await client.query({
          query: CURRENT_USER,
          context: { headers: { authorization: `Bearer ${idToken}` } },
        });
        console.log(user);
        // throw Error('Fire here');
      } catch {
        console.log('failed here');
        // If user is not found - sign them up
        await client.mutate({
          mutation: SIGN_UP_USER,
          variables: { user: { email } },
          context: { headers: { authorization: `Bearer ${idToken}` } },
        });
        console.log('it has failed')
      }

      // After succesfull signup store token in local storage
      console.log(idToken);
      console.log('attempt setting auth state');
      await auth.setAuthState({ token: idToken });
      console.log('fire here');
      history.replace('/app');
    };
    console.log('outside function');
    completeAuth();
  }, []);
  return <p>Please wait...</p>;
};
export default compose(
  withAuth,
  withApollo
)(AuthCallback);
