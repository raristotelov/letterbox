const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: 25,
    },
    production: {
        port: 25,
    },
};

module.exports = config[env];
