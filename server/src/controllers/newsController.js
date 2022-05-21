const { Router } = require('express');
const verifyIdToken = require('../middlewares/verifyIdToken');
const router = Router();

const { newsService } = require('../services');

router.get('/news', verifyIdToken, async (req, res) => {
    try {
        const result = await newsService.getNews(req.query._id);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;
