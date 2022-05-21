import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
    CREAT_EMAIL_MASK,
    GET_READ_LATER,
    MARK_AS_READ,
    CLEAR_READ_LATER
} from './actionTypes';
import firebase from '../firebase';
import {
    signUp as singUpService,
    createDbUser,
    createEmailMask,
    getReadLaterNews,
    markNewsAsRead
} from '../services/userService';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();


export const signInSuccess = (userData) => ({
    type: SIGNIN,
    payload: userData,
})

export const signOutSuccess = () => ({
    type: SIGNOUT,
})

export const verify = () => ({
    type: VERIFY,
})

export const emailMaskSuccess = (emailMask) => ({
    type: CREAT_EMAIL_MASK,
    payload: emailMask,
})

export const getReadLaterSuccess = (readLaterNews) => ({
    type: GET_READ_LATER,
    payload: readLaterNews
})

export const markReadSuccess = (readNews) => ({
    type: MARK_AS_READ,
    payload: readNews
})

export const clearReadLater = () => ({
    type: CLEAR_READ_LATER
})

export const signUp = (data) => async (dispatch) => {
    const response = await singUpService(data);
    const responseJSON = await response.json();

    if (responseJSON.error) {
        throw { error: responseJSON.error }
    }
}

export const signIn = (email, password) => async (dispatch) => {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = response.user;
    const emailMask = (await user.getIdTokenResult(true)).claims.emailMask;
    const _id = (await user.getIdTokenResult(true)).claims._id;
    dispatch(signInSuccess({ user, emailMask, _id }))
}

export const signInWithGoogle = (history) => async (dispatch) => {
    try {
        const user = await firebase.auth().signInWithPopup(googleProvider);
        const isNewUser = user.additionalUserInfo.isNewUser;
        if (isNewUser) {
            const email = user.additionalUserInfo.profile.email;
            const firstName = user.additionalUserInfo.profile.given_name;
            const lastName = user.additionalUserInfo.profile.family_name;
            const idToken = await user.user.getIdToken();
            try {
                const res = await createDbUser({ email, firstName, lastName }, idToken);
            } catch (err) {
                throw err;
            }
            history.push('/onboarding');
        } else {
            history.push('/main');
        }
    } catch (err) {
        console.log(err)
    }
}

export const signInWithFacebook = (history) => async (dispatch) => {
    try {
        const user = await firebase.auth().signInWithPopup(facebookProvider);
        const isNewUser = user.additionalUserInfo.isNewUser;
        if (isNewUser) {
            const email = user.additionalUserInfo.profile.email;
            const firstName = user.additionalUserInfo.profile.first_name;
            const lastName = user.additionalUserInfo.profile.last_name;
            const idToken = await user.user.getIdToken();
            try {
                const res = await createDbUser({ email, firstName, lastName }, idToken);
            } catch (err) {
                throw err;
            }
            history.push('/onboarding');
        } else {
            history.push('/main');
        }
    } catch (err) {
        console.log(err)
    }
}

export const signOut = () => async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(signOutSuccess());
}

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            const claims = (await user.getIdTokenResult(true)).claims;
            const { emailMask, admin, _id } = claims;
            dispatch(signInSuccess({ emailMask, admin, _id, user }));
        } else {
            dispatch(verify());
        }
    });
}

export const createEmailMaskAction = (username, idToken, user) => async (dispatch) => {
    const response = await createEmailMask(username, idToken);
    const responseJSON = await response.json();

    if (responseJSON.error) {
        throw { error: responseJSON.error }
    }
    const emailMask = (await user.getIdTokenResult(true)).claims.emailMask;
    dispatch(emailMaskSuccess({ emailMask }));
}

export const getReadLater = (idToken) => async (dispatch) => {
    try {
        const res = await getReadLaterNews(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getReadLaterSuccess(data));
    } catch (error) {
        alert(error);
    }
}

export const markRead = (selectedNews, idToken) => async (dispatch) => {
    try {
        const res = await markNewsAsRead(selectedNews, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(markReadSuccess(selectedNews));
    } catch (error) {
        alert(error);
    }
}