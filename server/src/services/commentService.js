const CommentModel = require('../models/CommentModel');

const create = async (userId, content, rating, newsId, replyToCommentId) => {
    try {
        const author = userId;
        const article = newsId;
        const comment = new CommentModel({ author, content, rating, article });
        await comment.save();
     
        if(replyToCommentId){
            const replyToComment = await CommentModel.findByIdAndUpdate(replyToCommentId, {
                $addToSet: {
                    replyes: comment._id
                }
            }) 
            comment.isReply = true;
            await comment.save();
        }
        return comment
    } catch (error) {
        throw error;
    }
}

const edit = async ( userId, content, rating, commentId) => {
    try {
        const comment = await CommentModel.findById(commentId).lean();
        if(comment.author == userId) {
            const edittedComment = await CommentModel.findByIdAndUpdate(commentId, {content, rating, 'editionDate': Date.now()})
            await edittedComment.save();
            return edittedComment
        }
        return 
    } catch (error) {
        throw error;
    }
}

const getComments = async (_id, newsId) => {
    try {
        const comments = await CommentModel.find({'article':newsId, 'isReply':false}).lean().populate({path:'author', select:{'firstName':1, 'lastName':1}});
        return comments;
    } catch (error) {
        throw error;
    }
}

const getReplyes = async (_id, repliesIds) => {
    repliesIdsArray = repliesIds.split(',');
    
    try {
        const replies = await CommentModel.find({'_id': repliesIdsArray}).lean().populate({path:'author', select:{'firstName':1, 'lastName':1}});
        return replies;
    } catch (error) {
        throw error;
    }
}

const addLike = async (_id, commentId) => {
    try {
        const comment = await CommentModel.findByIdAndUpdate(commentId, {
            $addToSet: {
                likes: _id
            }
        })
        const countLikes = await CommentModel.findById(commentId)
        return await countLikes.likes.length;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getComments,
    getReplyes,
    addLike,
    edit,
}