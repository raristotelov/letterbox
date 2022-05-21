const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { feedService } = require('../services');

router.post('/', verifyIdToken, async (req, res) => {
    const { feedName } = req.body;

    if (res.admin) {
        try {
            const newFeed = await feedService.create(feedName);
            return res.json(newFeed);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.put('/edit/:feedId', verifyIdToken, async (req, res) => {
    const { feedId } = req.params;
    const { feedName } = req.body;

    if (res.admin) {
        try {
            const editedFeed = await feedService.edit(feedId, feedName);
            return res.json(editedFeed);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.delete('/delete/:feedId', verifyIdToken, async (req, res) => {
    const { feedId } = req.params;

    if (res.admin) {
        try {
            const result = await feedService.deleteFeed(feedId);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.put('/toggle-hidden/:feedId', verifyIdToken, async (req, res) => {
    const { feedId } = req.params;

    if (res.admin) {
        try {
            const editedFeed = await feedService.toggleHiddenProperty(feedId);
            return res.json(editedFeed);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.get('/one', verifyIdToken, async (req, res) => {
    try {
        const feed = await feedService.getOne(req.query._id);
        return res.json(feed);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.get('/all', verifyIdToken, async (req, res) => {
    try {
        const feeds = await feedService.getAll();
        return res.json(feeds);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.post('/:feedId/add-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    if (res.admin) {
        const { newsletterId, feedId } = req.params;
        try {
            const response = await feedService.addNewsletter(newsletterId, feedId);
            return res.json(response);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.post('/:feedId/remove-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    if (res.admin) {
        const { newsletterId, feedId } = req.params;
        try {
            const response = await feedService.removeNewsletter(newsletterId, feedId);
            return res.json(response);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

module.exports = router;
