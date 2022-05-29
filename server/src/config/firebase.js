const admin = require('firebase-admin');
const serviceAccount = require('./letterbox-ce60d-firebase-adminsdk-cqtnv-4d1e8b7b9c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;