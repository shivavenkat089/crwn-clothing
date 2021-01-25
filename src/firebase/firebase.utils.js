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

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      let user = result.user;
      console.log('success-->', user);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      console.log('error-->', errorCode, errorMessage, email, credential);
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error while creating user', err.errorMessage, err);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertSnapshotCollectionToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
