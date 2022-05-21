const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    hidden: {
        type: Boolean,
        required: true,
    },
    newsletters: [
        {
            type: 'ObjectId',
            ref: 'Newsletter',
        },
    ],
});

const model = mongoose.model('Feed', FeedSchema);
module.exports = model;
