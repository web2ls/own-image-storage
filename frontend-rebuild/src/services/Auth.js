import fireAuth from '../config/firebase';

const {auth, signInWithEmailAndPassword, signOut} = fireAuth;

const AuthService = {
  login: (login, passwd) => {
    console.log(auth);
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, login, passwd).then(user => {
        resolve(true);
      }).catch(err => {
        console.error(err);
        reject(false);
      })
    })

  },
  logout: () => {
    return new Promise((resolve, reject) => {
      signOut(auth).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },
  isAuthorized: () => {
    return auth.currentUser;
  },
  initAuthObserver: (callback) => {
    auth.onAuthStateChanged(callback);
  }
};

export default AuthService;