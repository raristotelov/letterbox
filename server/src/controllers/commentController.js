const { Router } = require('express');
const router = Router();
const { commentService } = require('../services')

const verifyIdToken = require('../middlewares/verifyIdToken');

router.post('/', verifyIdToken, async (req, res) => {
    const {content, rating, newsId, replyToCommentId} = req.body;
    try {
        const response = await commentService.create(res._id, content, rating, newsId, replyToCommentId);
        return res.json(response);
    } catch(error) {
        console.log(error)
        return res.status(400).json({ error })
    }
})

router.post('/edit', verifyIdToken, async (req, res) => {
    const {content, rating, commentId} = req.body;
    try {
        const response = await commentService.edit(res._id, content, rating, commentId);
        return res.json(response);
    } catch(error) {
        console.log(error)
        return res.status(400).json({ error })
    }
})

router.get('/', verifyIdToken, async (req, res) => {
    const newsId  = req.query.newsId;
    try {
        const comments = await commentService.getComments(res._id, newsId);
        return res.json(comments);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/replies', verifyIdToken, async (req, res) => {
    const repliesIds  = req.query.replies;
    try {
        const replies = await commentService.getReplyes(res._id, repliesIds);
        return res.json(replies);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/:commentId/like', verifyIdToken, async (req, res) => {
        const { commentId } = req.params;
        try {
            const response = await commentService.addLike(res._id, commentId);
            return res.json(response);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
);

module.exports = router;