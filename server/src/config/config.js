const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://rado:aoKetDVHDYcaPO1H@letterbox.j4vrdrr.mongodb.net/letterbox?retryWrites=true&w=majority',
        jwtSecret: 'fawf*F*A5(WHp9AHF{)WFA12_)AWJ(JN_}AM_)@.?3FA()JA@!$AWD23@'
    },
    production: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://rado:aoKetDVHDYcaPO1H@letterbox.j4vrdrr.mongodb.net/letterbox?retryWrites=true&w=majority',
    }
};

module.exports = config[env];