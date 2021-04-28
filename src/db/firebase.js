import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA015zsjHrbdp_ZWQ3DNvwIjbtWLIECT4I",
  authDomain: "hunters-hub-test.firebaseapp.com",
  databaseURL: "https://hunters-hub-test-default-rtdb.firebaseio.com",
  projectId: "hunters-hub-test",
  storageBucket: "hunters-hub-test.appspot.com",
  messagingSenderId: "776598700474",
  appId: "1:776598700474:web:495e0382d4494706611d83",
});

export const db = firebase.firestore();
