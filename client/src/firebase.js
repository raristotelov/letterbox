import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAvHAdySDqJSxpko9DYFiWXQgZtot2QKCc",
	authDomain: "letterbox-ce60d.firebaseapp.com",
	projectId: "letterbox-ce60d",
	storageBucket: "letterbox-ce60d.appspot.com",
	messagingSenderId: "453739971233",
	appId: "1:453739971233:web:a4e2a55b3e3412acfa26e0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
