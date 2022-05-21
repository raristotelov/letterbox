const serverAddress = {
    development: 'http://localhost:5000',
    production: 'https://binaryzone.tk'
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV]

const domainAddress = {
    development: 'http://localhost:3000',
    production: 'https://letterbox-binary-zone.web.app'
}

export const DOMAIN_ADDRESS = domainAddress[process.env.NODE_ENV];