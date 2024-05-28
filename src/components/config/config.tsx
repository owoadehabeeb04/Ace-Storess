// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1eAihNUXli6TtvgAiNjJ6yA8VMEEw1M4",
  authDomain: "ace-stores-81139.firebaseapp.com",
  projectId: "ace-stores-81139",
  storageBucket: "ace-stores-81139.appspot.com",
  messagingSenderId: "989670190561",
  appId: "1:989670190561:web:1519c1b20084040ccf76a0",
  measurementId: "G-8T84N4SJWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const storage = getStorage(app);
export default function initFirebase() {
  if (!firebase.apps.length) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    app;
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        getAnalytics(app);
        getPerformance(app);
      }
    }
  }
}
export { firebase };
