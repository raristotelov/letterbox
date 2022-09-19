import { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { likeComment } from '../../../../services/commentService'
import CommentActions from './CommentActions';

import Comments from '../Comments';
import StarRatingDisplay from '../shared/StarRatingDisplay';
import { ReactComponent as Edit } from '../../../shared/Icons/Edit.svg';

import './Comment.scss';

const Comment = ({
    commentEditHandler,
    commentId,
    authorId,
    content,
    publicationDate,
    author,
    likes,
    rating,
    avatar,
    user,
	idToken,
    userId,
    editionDate,
    replyHandler,
    replies,
	isReply
}) => {
    const [likesCount, setLikesCount] = useState(likes.length);
    const [showReplies, setShowReplies] = useState(false);

    const likeHandler = () => {
        if (user && idToken) {
			likeComment(commentId, idToken)
				.then((res) => res.json())
				.then((likes) => setLikesCount(likes))
        }
    }

    const showHideReplies = () => {
        setShowReplies(!showReplies);
    } 

    return (
		<Fragment>
			<div className='comment-container'>
				<div className='comment-user-avatar'>
					{ avatar }
				</div>

				<div className='comment-content-wrapper'>
					<div className='comment-header'>
						<div className='comment-author-date'>
							<div className='comment-user-name'>
								{ author }
							</div>

							<div
								className='comment-publication-date'
							>
								{new Date(publicationDate).toLocaleString('en-US', {month:'short', day:'2-digit',year:'numeric', hour:'numeric', minute:'numeric', hour12:true})}
							</div>
						</div>

						<div className='comment-edit-icon-date'>
							<div
								className='comment-edit-icon'
							>
								{authorId === userId 
									? (
										<Edit
											onClick={()=>commentEditHandler({commentId, content, rating})}
										/>
									) : null
								}
							</div>

							<div
								className='comment-edit-date'
							>
								{editionDate 
									? (
										new Date(editionDate)
											.toLocaleString('en-US', {
												month: 'short',
												day: '2-digit',
												year: 'numeric',
												hour: 'numeric',
												minute: 'numeric',
												hour12: true
											})
									) : null
								}
							</div>
						</div>
					</div>

					<div className='comment-content'>
						{ content }
					</div>

					<StarRatingDisplay
						gradeIndex={rating}
					/>

					<CommentActions
						likesCount={likesCount} 
						likeHandler={likeHandler} 
						commentId={commentId} 
						replyHandler={replyHandler}
						repliesCount={replies.length}
						showHideReplies={showHideReplies}
						isReply={isReply}
					/>

					
				</div>
			</div>

			<div className='comment-reply'>
				{showReplies 
					? (
						<Comments
							replies={replies}
							user={user}
							idToken={idToken}                   
							replyHandler={replyHandler} 
							repliesCount={replies.length}
							showHideReplies={showHideReplies}
							commentEditHandler={commentEditHandler}
							isReply={true}
						/>
					) : null
				}
			</div>
		</Fragment>
    )
}
const mapStateToProps = state => ({
    user: state.user.user,
	idToken: state.user.idToken,
    userId: state.user.userId
});

export default connect(mapStateToProps, null)(Comment);