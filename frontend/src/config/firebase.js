import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.PREACT_APP_API_KEY,
  authDomain: process.env.PREACT_APP_AUTH_DOMAIN,
  projectId: process.env.PREACT_APP_PROJECT_ID,
  storageBucket: process.env.PREACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.PREACT_APP_MESSAGE_ID,
  appId: process.env.PREACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

export default firebase;
export const auth = firebase.auth();