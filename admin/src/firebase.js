import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiRffiTZu8QbmVoz7TgNY7428_ZOrnQbQ",
  authDomain: "netflix-21f1b.firebaseapp.com",
  projectId: "netflix-21f1b",
  storageBucket: "netflix-21f1b.appspot.com",
  messagingSenderId: "727892060194",
  appId: "1:727892060194:web:2d39967ee99851c679827b",
  measurementId: "G-YQDZS1Q4LH"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
