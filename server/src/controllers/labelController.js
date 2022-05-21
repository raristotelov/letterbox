const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { labelService } = require('../services');

router.post('/', verifyIdToken, async (req, res) => {
    const { name } = req.body;
    try {
        const response = await labelService.create(res._id, name);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/', verifyIdToken, async (req, res) => {
    try {
        const labels = await labelService.getAll(res._id);
        return res.json(labels);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/:labelId/add-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    const { newsletterId, labelId } = req.params;
    try {
        const response = await labelService.addNewsletter(res._id, newsletterId, labelId);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/:labelId/remove-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    const { newsletterId, labelId } = req.params;
    try {
        const response = await labelService.removeNewsletter(res._id, newsletterId, labelId);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/remove-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    const {newsletterId} = req.params;
    try {
        const response = await labelService.removeNewsletterFromAllLabels(res._id, newsletterId);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error});
    }
});

module.exports = router;