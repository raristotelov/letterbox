const NewsletterModel = require('../models/NewsletterModel');
const NewsModel = require('../models/NewsModel');

const calculateReadTime = require('./helpers/CalculateReadTime');

const add = async (newsData, newsletterName) => {
    let newsletter = await NewsletterModel.findOne({ name: newsletterName });

    if (newsletter == null) {
        newsletter = new NewsletterModel({ name: newsletterName });

        newsletter = await newsletter.save();
    }

    // const timeToRead = calculateReadTime(newsData.contentText);
    const timeToRead = 2;
  
    let news = new NewsModel({ ...newsData, readTime: timeToRead, newsletter: newsletter._id });
    newsletter.news.push(news._id);

    await newsletter.save();
    return news.save();
};

const getNews = async (id) => {
    const news = await NewsModel.findById(id).populate({ path: 'newsletter', select: 'name' });
    return news;
};

module.exports = {
    add,
    getNews,
};
