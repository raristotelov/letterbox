const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { newsletterService } = require('../services');

router.get('/all', verifyIdToken, async (req, res) => {
    try {
        const result = await newsletterService.getAll();
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/one', verifyIdToken, async (req, res) => {
    try {
        const result = await newsletterService.getOne(req.query._id);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/one-by-user', verifyIdToken, async (req, res) => {
    try {
        const result = await newsletterService.getOneByUser(req.query._id, res._id);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error });
    }
});


module.exports = router;