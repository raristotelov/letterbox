const serverAddress = {
    development: 'http://localhost:5000',
    production: 'https://letterbox.ga'
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV]

const domainAddress = {
    development: 'http://localhost:3000',
    production: 'http://letterbox.tk'
}

export const DOMAIN_ADDRESS = domainAddress[process.env.NODE_ENV];