// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyB1ZSAiwwllQlyVz_gI9ERVTKh5e9ygKwM",
  authDomain: "indianhotelhub.firebaseapp.com",
  databaseURL: "https://indianhotelhub-default-rtdb.firebaseio.com",
  projectId: "indianhotelhub",
  storageBucket: "indianhotelhub.appspot.com",
  messagingSenderId: "973495463486",
  appId: "1:973495463486:web:52ed674d972e68b5d1eb6f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();
