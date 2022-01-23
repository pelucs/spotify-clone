import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCHcxBPMuRYXthT2uipkqX01mfbPFxHBEQ",
  authDomain: "spotify-clone-d6a1b.firebaseapp.com",
  projectId: "spotify-clone-d6a1b",
  storageBucket: "spotify-clone-d6a1b.appspot.com",
  messagingSenderId: "184705319653",
  appId: "1:184705319653:web:4e5cce0bdacd9276498a0c"
});

const auth = firebase.auth();

export { firebase, auth }