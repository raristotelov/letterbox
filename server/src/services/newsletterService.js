const NewsletterModel = require('../models/NewsletterModel');
const UserModel = require('../models/UserModel');

const getAll = async () => {
    const newsletters = await NewsletterModel.find();
    return newsletters;
};

const getOne = async (id) => {
    const newsletter = await NewsletterModel.findById(id).populate({ path: 'news', populate: { path: 'feeds newsletter' } });
    return newsletter;
};

const getOneByUser = async (id, _id) => {
    const hiddenNews = await UserModel.findById(_id).then(res => res.hiddenNews);
    const newsletter = await NewsletterModel.findById(id).populate({ path: 'news', match: { _id: {$nin:hiddenNews }}, populate: { path: 'feeds newsletter' } });
    return newsletter;
};

const getOneByName = async (name) => {
    const newsletter = await NewsletterModel.findOne({ name });
    return newsletter;
};

module.exports = {
    getAll,
    getOne,
    getOneByUser,
    getOneByName,
};
