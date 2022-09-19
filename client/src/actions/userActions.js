import firebase from '../firebase';
import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
    CREATE_EMAIL_MASK,
    GET_READ_LATER,
    MARK_AS_READ_LATER,
    CLEAR_READ_LATER,
    GET_READ_NEWS,
    MARK_AS_READ,
    GET_HIDDEN_NEWS,
    HIDE_NEWS,
    UNHIDE_NEWS
} from './actionTypes';
import {
    signUpService,
    createEmailMaskService,
    createDbUserService,
    getReadLaterNewsService,
    markNewsAsReadLaterService,
    getReadNewsService,
    markNewsAsReadService,
    getHiddenNewsService,
    hideNewsService,
    unhideNewsService
} from '../services/userService';

const twitterProvider = new firebase.auth.TwitterAuthProvider ();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

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
    type: CREATE_EMAIL_MASK,
    payload: emailMask,
})

export const getReadLaterSuccess = (readLaterNews) => ({
    type: GET_READ_LATER,
    payload: readLaterNews
})

export const markAsReadLaterNewsSuccess = (updatedReadLaterNews) => ({
    type: MARK_AS_READ_LATER,
    payload: updatedReadLaterNews
})

export const clearReadLater = () => ({
    type: CLEAR_READ_LATER
})

export const getReadNewsSuccess = (readNews) => ({
    type: GET_READ_NEWS,
    payload: readNews
})

export const markAsReadSuccess = (readNews) => ({
    type: MARK_AS_READ,
    payload: readNews
})

export const getHiddenNewsSuccess = (hiddenNews) => ({
    type: GET_HIDDEN_NEWS,
    payload: hiddenNews
})

export const hideNewsSuccess = (hiddenNews) => ({
    type: HIDE_NEWS,
    payload: hiddenNews
})


export const unhideNewsSuccess = (hiddenNews) => ({
    type: UNHIDE_NEWS,
    payload: hiddenNews
})

export const signUp = (data) => async (dispatch) => {
    try {
        const res = await signUpService(data);

        const responeJSON = await res.json();

        if (responeJSON.error) {
            throw responeJSON.error;
        }
    } catch (err) {
        alert('Something went wrong while trying to sign up user!');
    }
}

export const signIn = (email, password) => async (dispatch) => {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);

    const user = response.user;

    const idToken = await user.getIdTokenResult(true);
    const claims = idToken.claims;

    const currUserIdToken = await user.getIdToken();

    const emailMask = claims.emailMask;
    const _id = claims._id;
    const admin = claims.admin;

    dispatch(signInSuccess({ admin, user, emailMask, _id, idToken: currUserIdToken }))
}

export const signInWithGoogle = (history) => async (dispatch) => {
    try {
        const user = await firebase.auth().signInWithPopup(googleProvider);

        const isNewUser = user.additionalUserInfo.isNewUser;
        
        const idToken = await user.user.getIdTokenResult(true);
        const claims = idToken.claims;

        if (isNewUser) {
            const email = user.additionalUserInfo.profile.email;
            const firstName = user.additionalUserInfo.profile.given_name;
            const lastName = user.additionalUserInfo.profile.family_name;
            const uid = user.user.uid;

            try {
                await createDbUserService({ uid,  email, firstName, lastName });
                
                firebase.auth().onAuthStateChanged(async (user) => {
                    if (user) {
                        const claims = (await user.getIdTokenResult(true)).claims;

                        const { admin, _id } = claims;

                        const currUserIdToken = await user.getIdToken();

                        dispatch(signInSuccess({ admin, _id, user, idToken: currUserIdToken }));
                    }
                });
            } catch (err) {
                alert("Something went wrong while trying to create user!");
            }
            
            history.push('/onboarding');
        } else {
            const admin = claims.admin;
            const _id = claims._id;
            const emailMask = claims.emailMask;
            const currUserIdToken = await user.user.getIdToken();

            dispatch(signInSuccess({  admin, user: user.user, emailMask, _id, idToken: currUserIdToken }))

            history.push('/explore-feeds');
        }
    } catch (err) {
        alert('Something went wrong while trying to sign up with google!');
    }
}

export const signInWithFacebook = (history) => async (dispatch) => {
    try {
        const user = await firebase.auth().signInWithPopup(facebookProvider);

        const isNewUser = user.additionalUserInfo.isNewUser;
        
        const idToken = await user.user.getIdTokenResult(true);
        const claims = idToken.claims;

        if (isNewUser) {
            const email = user.additionalUserInfo.profile.email;
            const firstName = user.additionalUserInfo.profile.first_name;
            const lastName = user.additionalUserInfo.profile.last_name;
            const uid = user.user.uid;

            try {
                await createDbUserService({ uid, email, firstName, lastName });
                
                firebase.auth().onAuthStateChanged(async (user) => {
                    if (user) {
                        const claims = (await user.getIdTokenResult(true)).claims;

                        const { admin, _id } = claims;

                        const currUserIdToken = await user.getIdToken();

                        dispatch(signInSuccess({ admin, _id, user, idToken: currUserIdToken }));
                    }
                });
            } catch (err) {
                alert("Something went wrong while trying to create user!");
            }
            
            history.push('/onboarding');
        } else {
            const admin = claims.admin;
            const _id = claims._id;
            const emailMask = claims.emailMask;
            const currUserIdToken = await user.user.getIdToken();

            dispatch(signInSuccess({  admin, user: user.user, emailMask, _id, idToken: currUserIdToken }))

            history.push('/explore-feeds');
        }
    } catch (err) {
        alert('Something went wrong while trying to sign up with facebook!');
    }
}

export const signInWithTwitter = (history) => async (dispatch) => {
    try {
        const user = await firebase.auth().signInWithPopup(twitterProvider);

        const isNewUser = user.additionalUserInfo.isNewUser;
        
        const idToken = await user.user.getIdTokenResult(true);
        const claims = idToken.claims;

        if (isNewUser) {
            const email = user.additionalUserInfo.profile.email;
            const firstName = user.additionalUserInfo.profile.first_name;
            const lastName = user.additionalUserInfo.profile.last_name;
            const uid = user.user.uid;

            try {
                await createDbUserService({ uid, email, firstName, lastName });
                
                firebase.auth().onAuthStateChanged(async (user) => {
                    if (user) {
                        const claims = (await user.getIdTokenResult(true)).claims;

                        const { admin, _id } = claims;

                        const currUserIdToken = await user.getIdToken();

                        dispatch(signInSuccess({ admin, _id, user, idToken: currUserIdToken }));
                    }
                });
            } catch (err) {
                alert("Something went wrong while trying to create user!");
            }
            
            history.push('/onboarding');
        } else {
            const admin = claims.admin;
            const _id = claims._id;
            const emailMask = claims.emailMask;
            const currUserIdToken = await user.user.getIdToken();

            dispatch(signInSuccess({  admin, user: user.user, emailMask, _id, idToken: currUserIdToken }))

            history.push('/explore-feeds');
        }
    } catch (err) {
        alert('Something went wrong while trying to sign up with twitter!');
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

            const currUserIdToken = await user.getIdToken();

            dispatch(signInSuccess({ emailMask, admin, _id, user, idToken: currUserIdToken }));
        } else {
            dispatch(verify());
        }
    });
}

export const createEmailMask = (username, idToken, user) => async (dispatch) => {
    try {
        const response = await createEmailMaskService(username, idToken);
        const data = await response.json();

        if (data.error) {
            throw data.error;
        }

        const emailMask = (await user.getIdTokenResult(true)).claims.emailMask;

        dispatch(emailMaskSuccess({ emailMask }));
    } catch (error) {
        alert('Something went wrong while trying to create email mask!');
    }

}

export const getReadLaterNews = (idToken) => async (dispatch) => {
    try {
        const res = await getReadLaterNewsService(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getReadLaterSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to get read later news!');
    }
}

export const markNewsAsReadLater = (selectedNews, idToken) => async (dispatch) => {
    try {
        const res = await markNewsAsReadLaterService(selectedNews, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(markAsReadLaterNewsSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to mark the news for read later!');
    }
}

export const getReadNews = (idToken) => async (dispatch) => {
    try {
        const res = await getReadNewsService(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getReadNewsSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying ti get read history!');
    }
}

export const markNewsAsRead = (selectedNews, idToken) => async (dispatch) => {
    try {
        const res = await markNewsAsReadService(selectedNews, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(markAsReadSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to mark the news as read!');
    }
}

export const getHiddenNews = (idToken) => async (dispatch) => {
    try {
        const res = await getHiddenNewsService(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getHiddenNewsSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to get hidden news!');
    }
}

export const hideNews = (selectedNews, idToken) => async (dispatch) => {
    try {
        const res = await hideNewsService(selectedNews, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(hideNewsSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to hide the news!');
    }
}

export const unhideNews = (selectedNews, idToken) => async (dispatch) => {
    try {
        const res = await unhideNewsService(selectedNews, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(unhideNewsSuccess(data));
    } catch (error) {
        alert('Something went wrong while trying to unhide the news!');
    }
}
