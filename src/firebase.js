import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBB2x6GzaPNeFzp6lCQ0RqW1oIOa44l2A",
  authDomain: "hypersona-de3bf.firebaseapp.com",
  projectId: "hypersona-de3bf",
  storageBucket: "hypersona-de3bf.appspot.com",
  messagingSenderId: "178820776039",
  appId: "1:178820776039:web:f1d8f22ae942b818bc14c2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
