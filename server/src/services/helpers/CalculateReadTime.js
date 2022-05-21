const calculateReadTime = (content) => {
    if (!content) {
        return;
    }
    let wordCount = content.split(' ');

    let timeToRead = wordCount.length / 200;

    timeToRead = Math.round(timeToRead);

    if (timeToRead < 1) {
        timeToRead = 1;
    }

    return timeToRead;
};

module.exports = calculateReadTime;
