import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "ULTILIZE SUA CHAVE",
  authDomain: "ULTILIZE SUA CHAVE",
  projectId: "ULTILIZE SUA CHAVE",
  storageBucket: "ULTILIZE SUA CHAVE",
  messagingSenderId: "ULTILIZE SUA CHAVE",
  appId: "ULTILIZE SUA CHAVE"
});

const auth = firebase.auth();

export { firebase, auth }
