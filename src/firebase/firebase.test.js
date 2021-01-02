import firebase from './firebase.utils';

const firestore = firebase.firestore();

export const getUsers = () => {
  const users = firestore
    .collection('users')
    .doc('RhsmPniWALfMFHLM1phF')
    .collection('5bYTYAE9oiFUmUj2c0P6');
  debugger;
  console.log(users);
};
