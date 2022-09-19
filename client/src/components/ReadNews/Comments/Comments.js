import { useState, useEffect } from 'react';

import { getComments, getReplies } from '../../../services/commentService';

import Comment from './Comment';
import EditComment from './EditComment';

const Comments = ({user, idToken, newsId, userId, isCommentModalOpen, replyHandler, replies, isReply}) => {
    const [comments, setComments] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');
    const [currentRating, setCurrentRating] = useState(null); 
    const [isCommentEditModalOpen, setIsCommentEditModalOpen] = useState(false)

    useEffect(() => {
        if (!replies) {
            if (user && idToken) {
                getComments(newsId, idToken)
                .then(res => res.json())
                .then(setComments)
                .catch((err) => {
                    alert("Something went wrong while trying to fecth comments!");
                });
            }
        }
    }, [user, isCommentEditModalOpen, isCommentModalOpen, idToken, newsId, replies])

    useEffect(() => {
        if (replies) {
            if (user && idToken) {
                getReplies(replies, idToken)
                .then(res => res.json())
                .then(setComments)
                .catch((err) => {
                    alert("Something went wrong while trying to fecth comments!");
                })
            }
        }
    }, [replies, idToken, user])

    const commentEditHandler = (props) => { 
        setCommentId(props.commentId);
        setCurrentContent(props.content);
        setCurrentRating(props.rating);
        setIsCommentEditModalOpen(!isCommentEditModalOpen);
    }
   
    const commentCloseEditModal = () => {
        if (replies) {
            if (user && idToken) {
                getReplies(replies, idToken)
                .then(res => res.json())
                .then(setComments)
                .catch((err) => {
                    alert("Something went wrong while trying to fecth comments!");
                })
            }
        } else {
            if (user && idToken) {
                getComments(newsId, idToken)
                .then(res => res.json())
                .then(setComments)
                .catch((err) => {
                    alert("Something went wrong while trying to fecth comments!");
                });
            }
        }

        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }

    return(
        <main className='article-main'>
            <EditComment
                isCommentModalOpen={isCommentEditModalOpen}
                commentEditModalOpenHandler={commentCloseEditModal}
                user={user}
                idToken={idToken}
                commentId={commentId}
                content={currentContent}
                rating={currentRating}
            />

            {comments 
                ? comments.map((comment) => (
                    <Comment
                        commentId={comment._id}
                        key={comment._id}
                        authorId = {comment.author._id}
                        author={`${comment.author.firstName} ${comment.author.lastName}`}
                        publicationDate={comment.publicationDate}
                        content={comment.content}
                        likes={comment.likes ? comment.likes : '0'}
                        rating={comment.rating}
                        avatar={`${comment.author.firstName.substring(0,1)}${comment.author.lastName.substring(0,1)}`}
                        userId={userId}
                        editionDate={comment.editionDate}
                        replies={comment.replies}
                        commentEditHandler={commentEditHandler}
                        replyHandler={replyHandler}
                        isReply={isReply}
                    />)) : null
            }
        </main>
    )
}

export default Comments