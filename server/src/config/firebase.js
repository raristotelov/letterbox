const admin = require('firebase-admin');
const serviceAccount = require('./letterbox-70a8a-firebase-adminsdk-fx6oy-efaad20afd.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;