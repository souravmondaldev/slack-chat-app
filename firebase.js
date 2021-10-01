import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgSbbToVh7A8pX4SmYNaqbL_3Tv0Ah7R8",
  authDomain: "react-slack-clone-c960f.firebaseapp.com",
  projectId: "react-slack-clone-c960f",
  storageBucket: "react-slack-clone-c960f.appspot.com",
  messagingSenderId: "226446392874",
  appId: "1:226446392874:web:46713a1229da6654b7cd53",
  measurementId: "G-S9VNGWCFPZ",
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);// Done by me
// firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;
