import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAvHYkNsU3If0iuIvxqi6oVzir0ypjBTs",
  authDomain: "db-library-project.firebaseapp.com",
  projectId: "db-library-project",
  storageBucket: "db-library-project.appspot.com",
  messagingSenderId: "544942974101",
  appId: "1:544942974101:web:0dd3802ab8fd8946dfa79c",
  measurementId: "G-SXRT84RZ6K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export default db;


