const user = require('./userController');
const newsletter = require('./newsletterController');
const news = require('./newsController');
const feed = require('./feedController');
const label = require('./labelController');
const comment = require('./commentController');

module.exports = {
    user,
    newsletter,
    news,
    feed,
    label,
    comment
};
