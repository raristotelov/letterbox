const serverAddress = {
    development: 'http://localhost:5000',
    production: 'https://letterbox.tk'
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV]

const domainAddress = {
    development: 'http://localhost:3000',
    production: 'http://letterbox.ga/'
}

export const DOMAIN_ADDRESS = domainAddress[process.env.NODE_ENV];