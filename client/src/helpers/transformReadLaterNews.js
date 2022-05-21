const transformReadLaterNews = (newsArr) => {
    return newsArr.reduce((acc, cur) => {
        if (acc.has('LATEST')) {
            const curNews = acc.get('LATEST');
            curNews.push(cur);
        } else {
            acc.set('LATEST', [cur]);
        }
        return acc;
    }, new Map());
}

export default transformReadLaterNews;