import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdd-lIfmZ1vbHIYbW62h1LSkwqC2BIUyE",
    authDomain: "getsocial-17fc9.firebaseapp.com",
    projectId: "getsocial-17fc9",
    storageBucket: "getsocial-17fc9.appspot.com",
    messagingSenderId: "864879783546",
    appId: "1:864879783546:web:3e45b8fe28acc8f04fd5c3",
    measurementId: "G-MD9YWWG7BG"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;