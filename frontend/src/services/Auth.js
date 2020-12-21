import { auth } from '../config/firebase';

const AuthService = {
  login: (login, passwd) => {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(login, passwd).then(user => {
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
  isAuth: () => {

  }
};

export default AuthService;