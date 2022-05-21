import { ReactComponent as LikeIcon } from '../../../shared/Icons/Like.svg';
import { ReactComponent as CommentIcon} from '../../../Main/shared/assets/comment.svg';
import './CommentActions.scss';

const CommentActions = ({ likesCount, likeHandler, replyesCount, replyHandler, commentId, showHideReplyes }) => {
    const heplyActionHandler = () => {
        if(replyesCount>0){
            showHideReplyes();
        }
    }

    return (
        <div className='comment-actions'>
            <div onClick={likeHandler}><LikeIcon /><span className='action-text'>{likesCount} Likes</span></div>
            <div onClick={heplyActionHandler}><CommentIcon /><span className='action-text'> {replyesCount} Comments</span></div>
            <div onClick={() => replyHandler(commentId)}>Reply</div>
        </div>
    )
}

export default CommentActions;