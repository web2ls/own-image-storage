import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE_ID,
  appId: import.meta.env.VITE_APP_APP_ID
};

initializeApp(firebaseConfig);

export default {
  auth: getAuth(),
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
