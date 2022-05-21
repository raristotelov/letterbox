const admin = require('../config/firebase');

module.exports = (req, res, next) => {
    if (req.header('Authorization')) {
        const idToken = req.header('Authorization').split(' ')[1] || req.header('Authorization');

        admin.auth().verifyIdToken(idToken)
            .then((decodedToken) => {
                res.uid = decodedToken.uid;
                res._id = decodedToken._id;
                res.admin = decodedToken.admin;
                next();
            })
            .catch((error) => {
                res.status(401).json({ error: 'Unauthorized' });
            });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }

}