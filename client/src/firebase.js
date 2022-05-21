import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZHoZ0XNT7kEG9NUgrI6UwYqquLc7vpOY",
    authDomain: "letterbox-70a8a.firebaseapp.com",
    projectId: "letterbox-70a8a",
    storageBucket: "letterbox-70a8a.appspot.com",
    messagingSenderId: "883275680699",
    appId: "1:883275680699:web:944f985fcff26d213d529e"
};

firebase.initializeApp(firebaseConfig);
export default firebase;