// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqyJ7rn1Y6EdXBIhouiEwQCPoeDIWU8w",
  authDomain: "school-attendance-app-da0c4.firebaseapp.com",
  projectId: "school-attendance-app-da0c4",
  storageBucket: "school-attendance-app-da0c4.appspot.com",
  messagingSenderId: "796406799256",
  appId: "1:796406799256:web:7a327e080bc0cd913629ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();