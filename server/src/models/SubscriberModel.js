const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    subscribeDate: {
        type: Date,
        default: Date.now
    },
});

const model = mongoose.model('Subscriber', SubscriberSchema);
module.exports = model;