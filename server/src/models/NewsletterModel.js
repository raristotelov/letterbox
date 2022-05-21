const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    news: [{
        type: 'ObjectId',
        ref: 'News'
    }]
});

const model = mongoose.model('Newsletter', NewsletterSchema);
module.exports = model;