const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    emailMask: {
        type: String,
        default: null
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    newsletterSubscriptions: [{
        type: 'ObjectId',
        ref: 'Newsletter'
    }],
    readLaterNews: [{
        type: 'ObjectId',
        ref: 'News'
    }],
    readNews: [{
        type: 'ObjectId',
        ref: 'News'
    }],
    hiddenNews: [{
        type: 'ObjectId',
        ref: 'News'
    }],
    labels: [{
        type: 'ObjectId',
        ref: 'Label'
    }],
});

const model = mongoose.model('User', UserSchema);
module.exports = model;