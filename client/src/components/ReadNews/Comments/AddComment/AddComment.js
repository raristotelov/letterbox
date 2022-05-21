import StarRating from '../shared/StarRating';
import { ReactComponent as SaveIcon } from '../../../shared/Icons/Save.svg';
import { ReactComponent as CircleX } from '../../../shared/Icons/CircleX.svg'; 
import { useEffect, useState } from 'react';
import { createComment } from '../../../../services/commentService'
import './AddComment.scss';

const AddComment = ({ isCommentModalOpen, commentInputModalOpenHandler, newsId, user, replyToCommentId }) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(null);

    useEffect(() => {
        setContent('');
        setRating(null);
    },[isCommentModalOpen]);

    const starRatingHandler = (value) => {
        setRating(value)
    } 
    
    const sendComment = async (e) => {
        e.preventDefault();
        if(rating && content && user){
            const idToken = await user.getIdToken(true);
            try {
                await createComment(content, rating, idToken, newsId, user, replyToCommentId);

                commentInputModalOpenHandler();
            } catch(res) {
                alert(res.error);
            }
        }
    }

    return (
        <div className={
            isCommentModalOpen
                ? 'add-comment-modal open'
                : 'add-comment-modal'
        }>
            <div className='add-comment-content'>
                <div className='add-comment-box'>
                    <div className='add-comment-close' onClick={()=>{commentInputModalOpenHandler()}}><CircleX /></div>
                    <h1>My Comment</h1>
                    <form>
                        <label className='add-comment-textarea-label' >Write your comment</label>
                        <textarea className='add-comment-area' rows='4' cols='43' name='content' value={content} onChange={(e)=>setContent(e.target.value)}/>
                    </form>

                    <div className='feed-rating'>
                        <h2 className='feed-rating-head'>How would you rate the feed</h2>
                        <span className='feed-rating-star-group'>
                            <StarRating starRatingHandler={starRatingHandler}/>
                        </span>
                    </div>
                        <button className='add-comment-btn' onClick={sendComment}>
                            <div className='add-comment-btn-text'>Save</div> 
                            <SaveIcon className='add-comment-btn-icon'/>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default AddComment;