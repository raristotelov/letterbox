const config = require('./config/config');
const SMTPServer = require('smtp-server').SMTPServer;
const simpleParser = require('mailparser').simpleParser;

const letterService = require('./services/letterService');
const { newsService } = require('../src/services');

const server = new SMTPServer({
    onData(stream, session, callback) {
        simpleParser(stream, {}, (err, parsed) => {
            if (err) {
                console.log(err);
            }

            const letter = letterService.convertParsedDataToLetter(parsed);

            if (!letter) {
                return;
            }

            letterData = {
                title: letter.title,
                contentHtml: letter.contentHtml,
                contentText: letter.contentText,
                contentTextAsHtml: letter.contentTextAsHtml,
                date: letter.date,
                image: letter.image ? letter.image : 'https://www.andromo.com/blog/wp-content/uploads/2020/12/news-1.jpg',
            };

            try {
                newsService.add(letterData, letter.newsletter);
            } catch (error) {
                console.log(error);
            }
        });
        stream.on('end', () => {
            let err;
            if (stream.sizeExceeded) {
                err = new Error('Error: message exceeds fixed maximum message size 10 MB');
                err.responseCode = 552;
                return callback(err);
            }

            callback(null, 'Message accepted');
        });
    },
    disabledCommands: ['AUTH'],
});

server.listen(config.port, () => console.log(`SMTP server is up and listening on port ${config.port}...`));

server.on('error', (err) => {
    console.log('Error %s', err.message);
});
