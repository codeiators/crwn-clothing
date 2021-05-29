import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoVQm70fkZj2qyiVOR2Rv5yxIPtCsf-Y8",
    authDomain: "crwn-db-3d681.firebaseapp.com",
    projectId: "crwn-db-3d681",
    storageBucket: "crwn-db-3d681.appspot.com",
    messagingSenderId: "94388237460",
    appId: "1:94388237460:web:01c77d7e5ff98bcf037081",
    measurementId: "G-1C23VT2ZJK"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
