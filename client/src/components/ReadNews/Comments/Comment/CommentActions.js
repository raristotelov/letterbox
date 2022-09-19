import { ReactComponent as LikeIcon } from '../../../shared/Icons/Like.svg';
import { ReactComponent as CommentIcon} from '../../../Main/shared/assets/comment.svg';

import './CommentActions.scss';

const CommentActions = ({ 
    likesCount,
    likeHandler,
    repliesCount,
    replyHandler,
    commentId,
    showHideReplies,
    isReply
}) => {
    const heplyActionHandler = () => {
        if(repliesCount > 0){
            showHideReplies();
        }
    }

    return (
        <div className='comment-actions'>
            <div
                onClick={likeHandler}
                className='comment-action'
            >
                <LikeIcon />

                <span className='action-text'>
                    {likesCount} Likes
                </span>
            </div>

            {!isReply 
                ? (
                    <div
                        onClick={heplyActionHandler}
                        className='comment-action'
                    >
                        <CommentIcon />

                        <span className='action-text'
                        >
                            {repliesCount} Comments
                        </span>
                    </div>
                ) : null
            }

            {!isReply 
                ? (
                    <div
                        onClick={() => replyHandler(commentId)}
                        className='comment-action'
                    >
                        Reply
                    </div>
                ) : null
            }
        </div>
    )
}

export default CommentActions;