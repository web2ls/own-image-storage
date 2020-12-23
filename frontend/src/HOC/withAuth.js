import { route } from 'preact-router';

import AuthService from '../services/Auth';

const withAuth = (WrappedComponent) => {
  return () => {
    const expires = localStorage.getItem('expires');
    if (!expires || Number(expires) <= new Date().getTime()) {
      AuthService.logout();
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