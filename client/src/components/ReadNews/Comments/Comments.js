import { useState, useEffect } from 'react';
import Comment from './Comment';
import { getComments, getReplyes } from '../../../services/commentService';
import EditComment from './EditComment';

const Comments = ({user, newsId, userId, isCommentModalOpen, replyHandler, replyes}) => {
    const [comments, setComments] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');
    const [currentRating, setCurrentRating] = useState(null); 
    const [isCommentEditModalOpen, setIsCommentEditModalOpen] = useState(false)

    useEffect(() => {
        if (!replyes) {
            if (user) {
                user.getIdToken()
                    .then(async idToken => {
                        return getComments(newsId, idToken);
                    })
                    .then(res => res.json())
                    .then(setComments)
                    .catch(err => console.log(err))
            }
        }
    }, [user, isCommentEditModalOpen, isCommentModalOpen])

    useEffect(() => {
        if (replyes) {
            if (user) {
                user.getIdToken()
                    .then(async idToken => {
                        return getReplyes(replyes, idToken);
                    })
                    .then(res => res.json())
                    .then(setComments)
                    .catch(err => console.log(err))
            }
        }
    }, [replyes])

    const commentEditHandler = async (props) => {  
        setCommentId(props.commentId)
        setCurrentContent(props.content)
        setCurrentRating(props.rating)
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }
   
    const commentCloseEditModal = () => {  
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }

    return(
        <main className='article-main'>

            <EditComment
                isCommentModalOpen={isCommentEditModalOpen}
                commentEditModalOpenHandler={commentCloseEditModal}
                user={user}
                commentId={commentId}
                content={currentContent}
                rating={currentRating}
            />
            { 
                comments && comments.map(x => { 
    
                    return <Comment 
                        commentId={x._id}
                        key={x._id}
                        authorId = {x.author._id}
                        author={`${x.author.firstName} ${x.author.lastName}`}
                        publicationDate={x.publicationDate}
                        content={x.content}
                        likes={x.likes ? x.likes : '0'}
                        rating={x.rating}
                        avatar={`${x.author.firstName.substring(0,1)}${x.author.lastName.substring(0,1)}`}
                        userId={userId}
                        editionDate={x.editionDate}
                        replyes={x.replyes}
                        commentEditHandler={commentEditHandler}
                        replyHandler={replyHandler}
                />})
            }
        </main>
    )
}

export default Comments