const LabelModel = require('../models/LabelModel');
const UserModel = require('../models/UserModel');

const getAllLabels = async (userId) => {
    try {
        const userEntry = await UserModel.findById(userId).populate({ path: 'labels', populate: { path: 'newsletters' } });

        return userEntry.labels;
    } catch (error) {
        throw error;
    }
}

const create = async (userId, name) => {
    try {
        const label = new LabelModel({ name });
        await label.save();

        await UserModel.findByIdAndUpdate(userId, {
            $addToSet: {
                labels: label._id
            }
        });

        return getAllLabels(userId);
    } catch (error) {
        throw error;
    }
}

const addNewsletter = async (userId, newsletterId, labelId) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user.labels.includes(labelId)) {
            throw 'No such label.';
        }

        await LabelModel.findByIdAndUpdate(labelId, {
            $addToSet: {
                newsletters: newsletterId
            }
        });

        return getAllLabels(userId);
    } catch (error) {
        throw error;
    }
}

const removeNewsletter = async (userId, newsletterId, labelId) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user.labels.includes(labelId)) {
            throw 'No such label.';
        }

        await LabelModel.findByIdAndUpdate(labelId, {
            $pull: {
                newsletters: newsletterId
            }
        });

        return getAllLabels(userId);
    } catch (error) {
        throw error;
    }
}

const removeNewsletterFromAllLabels = async (userId, newsletterId) => {
    try {
        const user = await UserModel.findById(userId);
        const labels = user.labels;

        for (currentLabel of labels) {
            await LabelModel.findByIdAndUpdate(currentLabel, {
                $pull: {
                    newsletters: newsletterId
                }
            })
        };

        return getAllLabels(userId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAllLabels,
    addNewsletter,
    removeNewsletter,
    removeNewsletterFromAllLabels,
};