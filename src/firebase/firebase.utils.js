import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9wde_a1q6KPZx9DkbKWFzaDWQsLFh7Ss",
  authDomain: "myproject-751d0.firebaseapp.com",
  databaseURL: "https://myproject-751d0.firebaseio.com",
  projectId: "myproject-751d0",
  storageBucket: "myproject-751d0.appspot.com",
  messagingSenderId: "168640685383",
  appId: "1:168640685383:web:e4c0b871203f49cb361862"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
