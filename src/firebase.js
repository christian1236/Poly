import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBTD5Cy8JJbNDyh7PM_b4zKeGxHkBvsgGc",
  authDomain: "react-slack-clone-c8cfc.firebaseapp.com",
  databaseURL: "https://react-slack-clone-c8cfc-default-rtdb.firebaseio.com/",
  projectId: "react-slack-clone-c8cfc",
  storageBucket: "react-slack-clone-c8cfc.appspot.com",
  messagingSenderId: "220623897675",
  appId: "1:220623897675:web:ea74d4a7f738553c8939ce",
  measurementId: "G-CN7GRSCXSG"
};
firebase.initializeApp(config);

export default firebase;
