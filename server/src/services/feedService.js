const FeedModel = require('../models/FeedModel');

const create = async (feedName) => {
    const newFeed = new FeedModel({ name: feedName, hidden: false, newsletters: [] });

    return newFeed.save();
};

const edit = async (feedId, feedName) => {
    await FeedModel.updateOne({ _id: feedId }, { name: feedName });

    return FeedModel.findOne({ _id: feedId });
};

const deleteFeed = async (feedId) => {
    return FeedModel.deleteOne({ _id: feedId });
};

const toggleHiddenProperty = async (feedId) => {
    let feed = await FeedModel.findOne({ _id: feedId });
    feed.hidden = Boolean(!feed.hidden);

    return feed.save();
};

const getOne = async (id) => {
    const feed = await FeedModel.findById(id).populate('newsletters');
    return feed;
};

const getAll = async (id) => {
    const feed = await FeedModel.find();
    return feed;
};

const addNewsletter = async (newsletterId, feedId) => {
    try {
        await FeedModel.findByIdAndUpdate(feedId, {
            $addToSet: {
                newsletters: newsletterId,
            },
        });

        return 'Success';
    } catch (error) {
        throw error;
    }
};

const removeNewsletter = async (newsletterId, feedId) => {
    try {
        await FeedModel.findByIdAndUpdate(feedId, {
            $pull: {
                newsletters: newsletterId,
            },
        });

        return 'Success';
    } catch (error) {
        throw error;
    }
};

module.exports = {
    create,
    edit,
    deleteFeed,
    toggleHiddenProperty,
    getOne,
    getAll,
    addNewsletter,
    removeNewsletter,
};
