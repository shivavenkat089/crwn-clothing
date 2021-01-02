import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBOWdHwHUsHp23HYqu8_lvig9-8zo-nEfE',
  authDomain: 'crwn-db-69b6f.firebaseapp.com',
  projectId: 'crwn-db-69b6f',
  storageBucket: 'crwn-db-69b6f.appspot.com',
  messagingSenderId: '460736116503',
  appId: '1:460736116503:web:e494b01621c21a232e2952',
  measurementId: 'G-8BM5J4LCHM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
