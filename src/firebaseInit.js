import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpB9VGQYJaRwsw9qI715GrIW7YUEOay_w",
  authDomain: "rwitter-a6e69.firebaseapp.com",
  projectId: "rwitter-a6e69",
  storageBucket: "rwitter-a6e69.appspot.com",
  messagingSenderId: "1078279324961",
  appId: "1:1078279324961:web:257b6cefd43b936b68aa60",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const firebaseAuth = firebase.auth();
