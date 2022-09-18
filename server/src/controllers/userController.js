const { Router } = require('express');
const router = Router();

const { userService } = require('../services');
const verifyIdToken = require('../middlewares/verifyIdToken');

router.post('/sign-up', async (req, res) => {
    try {
        const userRecord = await userService.signUp(req.body);

        return res.json(userRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create-email-mask', verifyIdToken, async (req, res) => {
    try {
        const status = await userService.createEmailMask(req.body.emailMask, res._id, res.uid);

        return res.json(status);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create-db-user', verifyIdToken, async (req, res) => {
    try {
        const status = await userService.createDbUser(req.body, res.uid);

        return res.json(status);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/read-later', verifyIdToken, async (req, res) => {
    try {
        const news = await userService.getReadLaterNews(res._id);

        return res.json(news);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/read-later', verifyIdToken, async (req, res) => {
    try {
        const updatedReadLaterNews = await userService.markNewsAsReadLater(res._id, req.body.selectedNews);

        return res.json(updatedReadLaterNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/read-news', verifyIdToken, async (req, res) => {
    try {
        const readNews = await userService.getReadNews(res._id);

        return res.json(readNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/mark-read', verifyIdToken, async (req, res) => {
    const { selectedNews } = req.body;
    try {
        const updatedNews = await userService.markNewsAsRead(res._id, selectedNews);

        return res.json(updatedNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/hidden-news', verifyIdToken, async (req, res) => {
    try {
        const hiddenNews = await userService.getHiddenNews(res._id);

        return res.json(hiddenNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/hide-news', verifyIdToken, async (req, res) => {
    try {
        const updatedNews = await userService.hideNews(res._id, req.body.selectedNews);

        return res.json(updatedNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/unhide-news', verifyIdToken, async (req, res) => {
    try {
        const updatedHiddenNews = await userService.unhideNews(res._id, req.body.selectedNews);

        return res.json(updatedHiddenNews);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;