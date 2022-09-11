const admin = require('firebase-admin');
const serviceAccount = require('./letterbox-c975e-firebase-adminsdk-sg164-0d153278c6.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;