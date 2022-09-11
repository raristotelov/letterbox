import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyDDk2-b0csZrd3Pd1hlRfW0pe3BM5WkdN4",
	authDomain: "letterbox-c975e.firebaseapp.com",
	projectId: "letterbox-c975e",
	storageBucket: "letterbox-c975e.appspot.com",
	messagingSenderId: "6213824795",
	appId: "1:6213824795:web:bb9a5c04e7197f1530e3be"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
