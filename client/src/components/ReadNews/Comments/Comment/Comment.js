import { connect } from 'react-redux';
import StarRatingDisplay from '../shared/StarRatingDisplay';
import CommentActions from './CommentActions';
import { likeComment } from '../../../../services/commentService'
import { ReactComponent as Edit } from '../../../shared/Icons/Edit.svg';
import Comments from '../Comments';
import './Comment.scss';
import { useState } from 'react';

const Comment = ({commentEditHandler, commentId, authorId, content, publicationDate, author, likes, rating, avatar, user, userId, editionDate, replyHandler, replyes}) => {
    const [likesCount, setLikesCount] = useState(likes.length);
    const [showReplyes, setShowReplyes] = useState(false);

    const likeHandler = () => {
        if(user) {
            user.getIdToken()
                .then(async idToken => {                 
                    return await likeComment(commentId, idToken);
                })
                .then(res=>res.json())
                .then(likes => setLikesCount(likes))
        }
    }

    const showHideReplyes = () => {
        setShowReplyes(!showReplyes);
    } 

    return (
        <div className='comment-container'>
            <div className='comment-user-avatar'>{ avatar }</div>
            <div className='comment-content-wrapper'>
                <div className='comment-header'>
                    <div className='comment-author-date'>
                        <div className='comment-user-name'>{ author }</div>
                        <div className='comment-publication-date'>{new Date(publicationDate).toLocaleString('en-US', {month:'short', day:'2-digit',year:'numeric', hour:'numeric', minute:'numeric', hour12:true})}</div>
                    </div>
                    <div className='comment-edit-icon-date'>
                        <div className='comment-edit-icon' >{authorId==userId? <Edit onClick={()=>commentEditHandler({commentId, content, rating})} /> : null}</div>
                        <div className='comment-edit-date'>{editionDate?(new Date(editionDate).toLocaleString('en-US', {month:'short', day:'2-digit',year:'numeric', hour:'numeric', minute:'numeric', hour12:true})):null}</div>
                    </div>
                </div>
                <div className='comment-content'>{ content }</div>
                <StarRatingDisplay  gradeIndex={rating}/>
                <CommentActions 
                    likesCount={likesCount} 
                    likeHandler={likeHandler} 
                    commentId={commentId} 
                    replyHandler={replyHandler} 
                    replyesCount={replyes.length}
                    showHideReplyes={showHideReplyes}/>
            <div className='comment-reply'>
            {
                showReplyes 
                 ? <Comments replyes={replyes} user={user}                     
                    replyHandler={replyHandler} 
                    replyesCount={replyes.length}
                    showHideReplyes={showHideReplyes} commentEditHandler={commentEditHandler}/>
                 : null
            }
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    user: state.user.user,
    userId: state.user.userId
});

export default connect(mapStateToProps, null)(Comment);