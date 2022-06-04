const admin = require('../config/firebase');
const UserModel = require('../models/UserModel');
const SubscriberModel = require('../models/SubscriberModel');
const LabelModel = require('../models/LabelModel');

const signUp = async ({ email, password, firstName, lastName, year, month, day, country }) => {
    const displayName = `${firstName} ${lastName}`;
    const birthDate = new Date(year, month - 1, day, 12);

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName
        });

        const user = new UserModel({ email, firstName, lastName, birthDate, country });
        const _id = user._id;

        await user.save();
    
        await admin.auth().setCustomUserClaims(userRecord.uid, { _id });
    
        return userRecord;
    } catch (error) {
        throw new Error('Something went wrong while trying to sign up!');
    }
};

const createEmailMask = async (emailMask, _id, uid) => {
    try {
        const currentUser = await UserModel.findById(_id);

        if (currentUser.emailMask) {
            throw new Error('You already have an email mask!');
        }

        const emailMaskTaken = await UserModel.findOne({ emailMask });

        if (emailMaskTaken) {
            throw new Error('Username is taken.');
        }

        await UserModel.findByIdAndUpdate(_id, { emailMask });

        await admin.auth().setCustomUserClaims(uid, { _id, emailMask });

        return 'Email mask created successfully.';
    } catch (error) {
        throw new Error('Something went wrong while trying to crete eamil mask!');
    }
}

const createDbUser = async (data, uid) => {
    try {
        const user = new UserModel(data);
        const _id = user._id;
        await user.save();

        await admin.auth().setCustomUserClaims(uid, { _id });

        return uid;
    } catch (error) {
        throw new Error('Something went wrong while trying to create DB user!');
    }
}

const subscribe = ({ email }) => {
    let subscriber = new SubscriberModel({ email });

    return subscriber.save();
}

const hideNews = async (_id, selectedNews) => {
    try {
        await UserModel.findByIdAndUpdate(_id, {
            $addToSet: {
                hiddenNews: selectedNews
            }
        })

        return 'Success';

    } catch (error) {
        throw error;
    }
}

const markNewsReadLater = async (_id, selectedNews) => {
    try {
        await UserModel.findByIdAndUpdate(_id, {
            $addToSet: {
                readLaterNews: selectedNews
            }
        });

        return 'Success';
    } catch (error) {
        throw error;
    }
}

const getReadLaterNews = async (_id) => {
    try {
        const userEntry = await UserModel.findById(_id).populate('readLaterNews');
        return userEntry.readLaterNews.reverse();
    } catch (error) {
        throw error;
    }
}

const pullFromReadLater = async (_id, selectedNews) => {
    try {
        await UserModel.findByIdAndUpdate(_id, {
            $pull: {
                readLaterNews: { $in: selectedNews }
            }
        });
        return 'Success';
    } catch (error) {
        throw error;
    }
}

const markNewsAsRead = async (_id, selectedNews) => {
    try {
        await UserModel.findByIdAndUpdate(_id, {
            $addToSet: {
                readNews: selectedNews 
            }
        });
        return 'Success';
    } catch (error) {
        throw error;
    }
}

module.exports = {
    signUp,
    createEmailMask,
    createDbUser,
    subscribe,
    hideNews,
    markNewsReadLater,
    pullFromReadLater,
    getReadLaterNews,
    markNewsAsRead
}