import { auth, signInWithEmailAndPasswd } from '../config/firebase';

const AuthService = {
  login: (login, passwd) => {
    console.log(auth);
    return new Promise((resolve, reject) => {
      signInWithEmailAndPasswd(auth, login, passwd).then(user => {
        resolve(true);
      }).catch(err => {
        console.error(err);
        reject(false);
      })
    })

  },
  logout: () => {
    return new Promise((resolve, reject) => {
      auth.signOut().then(res => {
        resolve(true);
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