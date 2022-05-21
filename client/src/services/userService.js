import request from './requester';
import firebase from '../firebase';
import { SERVER_ADDRESS, DOMAIN_ADDRESS } from '../env';
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signUp = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/signup`, data);
}

export const createEmailMask = (username, idToken) => {
    const emailMask = `${username}@newsletterapp.io`;
    return request.post(`${SERVER_ADDRESS}/user/createemailmask`, { emailMask }, idToken);
}

export const createDbUser = (data, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/createdbuser`, data, idToken);
}

export const subscribe = async (email) => {
    const data = await request.post(`${SERVER_ADDRESS}/user/subscribe`, { email });

    return data;
}

export const resetPassword = (email) => {
    const actionCodeSettings = {
        url: `${DOMAIN_ADDRESS}/signin`
    };

    return firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {
            return 'success';
        })
        .catch(err => {
            return err.code;
        });
}

export const markNewsReadLater = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/readlater`, { selectedNews }, idToken)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                throw data.error
            }
            return data;
        })
        .catch(err => alert(err));
}

export const markNewsAsRead = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/markread`, { selectedNews }, idToken);
}

export const getReadLaterNews = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/readlater`, null, idToken);
}

export const hideNews = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/hide-news`, { selectedNews }, idToken)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                throw data.error;
            }
            return data;
        })
        .catch(err => alert(err));
}