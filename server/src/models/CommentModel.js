const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now
    },
    editionDate: {
        type: Date,
        default: null
    },
    rating: {
        type: Number,
        default: null
    },
    likes: [{
        type: 'ObjectId',
        ref: 'User'
    }],
    author: {
        type: 'ObjectId',
        ref: 'User'
    },
    article: {
        type: 'ObjectId',
        ref: 'News'
    },
    replyes: [{
        type: 'ObjectId',
        ref: 'Comments'
    }],
    isReply: {
        type: Boolean,
        default: false
    }
});

const model = mongoose.model('Comment', CommentSchema);
module.exports = model;

