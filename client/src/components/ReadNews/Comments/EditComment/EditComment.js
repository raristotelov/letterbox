import StarRating from '../shared/StarRating';
import { ReactComponent as SaveIcon } from '../../../shared/Icons/Save.svg';
import { ReactComponent as CircleX } from '../../../shared/Icons/CircleX.svg'; 
import { useEffect, useState } from 'react';
import { editComment } from '../../../../services/commentService'
import './EditComment.scss';

const EditComment = ({ isCommentModalOpen, commentEditModalOpenHandler, user, commentId, content, rating }) => {
    const [currentContent, setContent] = useState('');
    const [currentRating, setRating] = useState(0);

    const starRatingHandler = (value) => {
        setRating(value)
    } 
    useEffect(()=> {
        setContent(content);
        setRating(rating)
    }, [content, rating])

    const sendComment = async (e) => {
        e.preventDefault();
        if(currentRating && currentContent && user){
            const idToken = await user.getIdToken(true);
            try {
                await editComment(currentContent, currentRating, idToken, commentId);
                commentEditModalOpenHandler();
            } catch(res) {
                alert(res.error);
            }
        }
    }

    const updateInputValue = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className={
            isCommentModalOpen
                ? 'edit-comment-modal open'
                : 'edit-comment-modal'
        }>
            <div className='edit-comment-content'>
                <div className='edit-comment-box'>
                    <div className='edit-comment-close' onClick={()=>{commentEditModalOpenHandler()}}><CircleX /></div>
                    <h1>Edit Comment</h1>
                    <form>
                        <label className='edit-comment-textarea-label' >Write your comment</label>
                        <textarea className='edit-comment-area' rows='4' cols='43' name='content' value={currentContent} onChange={updateInputValue}/>
                    </form>

                    <div className='feed-rating'>
                        <h2 className='feed-rating-head'>How would you rate the feed</h2>
                        <span className='feed-rating-star-group'>
                            <StarRating starRatingHandler={starRatingHandler} incomingGrade={rating}/>
                        </span>
                    </div>
                        <button className='edit-comment-btn' onClick={sendComment}>
                            <div className='edit-comment-btn-text'>Save</div> 
                            <SaveIcon className='edit-comment-btn-icon'/>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default EditComment;