const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const config = require('./config/config');
const connectDb = require('./config/database');
require('../smtpServer/server');

const routes = require('./router');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

connectDb();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const certLocation = process.env.CERT;
const keyLocation = process.env.KEY;

if (process.env.NODE_ENV == 'production') {
    const cert = fs.readFileSync(path.resolve(certLocation, './cert.pem'), 'utf8');
    const key = fs.readFileSync(path.resolve(keyLocation, './privkey.pem'), 'utf8');
    const credentials = { key, cert };

    https.createServer(credentials, app).listen(443, () => console.log('Server is running on port 443'));

    http.createServer(function (req, res) {
        res.writeHead(301, { Location: 'https://' + req.headers['host'] + req.url });
        res.end();
    }).listen(config.port, () => console.log(`App is running on port ${config.port} with HTTP protocol`));
} else {
    app.listen(config.port, console.log(`Server is running on port ${config.port}`));
}
