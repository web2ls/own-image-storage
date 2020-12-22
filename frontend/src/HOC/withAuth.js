import { route } from 'preact-router';

import AuthService from '../services/Auth';

const withAuth = (WrappedComponent) => {
  return () => {
    console.log('current auth state is: ', AuthService.isAuthorized());
    if (AuthService.isAuthorized() === null) {
      route('/login');
      return;
    }

    return (
      <>
        <WrappedComponent />
      </>
    )
  }
};

export default withAuth;