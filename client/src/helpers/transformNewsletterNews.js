const transformNewsletterNews = (news) => {
    return news.sort((a, b) => new Date(b.date) - new Date(a.date))
        .reduce((acc, cur) => {
            const date = new Date(cur.date.split('T')[0]).toDateString().substring(4);

            if (acc.has(date)) {
                const currDate = acc.get(date);
                currDate.push(cur);
            } else {
                acc.set(date, [cur]);
            }

            return acc;
        }, new Map());
}

export default transformNewsletterNews;