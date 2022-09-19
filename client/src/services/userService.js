import request from './requester';
import firebase from '../firebase';
import { SERVER_ADDRESS, DOMAIN_ADDRESS } from '../env';
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signUpService = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/sign-up`, data);
}

export const createDbUserService = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/create-db-user`, data);
}

export const createEmailMaskService = (username, idToken) => {
    const emailMask = `${username}@newsletterapp.io`;
    
    return request.post(`${SERVER_ADDRESS}/user/create-email-mask`, { emailMask }, idToken);
}

export const resetPasswordService = (email) => {
    const actionCodeSettings = {
        url: `${DOMAIN_ADDRESS}/sign-in`
    };

    return firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {
            return 'success';
        })
        .catch(err => {
            return err.code;
        });
}

export const getReadLaterNewsService = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/read-later`, null, idToken);
}

export const markNewsAsReadLaterService = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/read-later`, { selectedNews }, idToken);
}

export const getReadNewsService = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/read-news`, null, idToken);
}

export const markNewsAsReadService = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/mark-read`, { selectedNews }, idToken);
}

export const getHiddenNewsService = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/hidden-news`, null, idToken);
}

export const hideNewsService = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/hide-news`, { selectedNews }, idToken);
}

export const unhideNewsService = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/unhide-news`, { selectedNews }, idToken);
}