const mongoose = require('mongoose');

const LabelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    newsletters: [{
        type: 'ObjectId',
        ref: 'Newsletter'
    }]
});

const model = mongoose.model('Label', LabelSchema);
module.exports = model;