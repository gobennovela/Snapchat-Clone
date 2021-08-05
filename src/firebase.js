import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdromQvEgPJL5zZm0vXyGnhUzZ36Fk4hk",
    authDomain: "snapchat-clone-yt-2aa46.firebaseapp.com",
    projectId: "snapchat-clone-yt-2aa46",
    storageBucket: "snapchat-clone-yt-2aa46.appspot.com",
    messagingSenderId: "552935372806",
    appId: "1:552935372806:web:b7a3f219356e0111c92b87"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firebasestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, provider, auth, storage};