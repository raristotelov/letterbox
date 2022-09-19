import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import { getNews } from '../../services/newsService';
import { unsubscribeFromNewsletterInAllLabels } from '../../actions/labelActions';
import { markNewsAsRead, markNewsAsReadLater } from '../../actions/userActions';

import ReadNewsHeader from './ReadNewsHeader';
import ReadNewsOptionsMenu from './ReadNewsOptionsMenu';
import AddComment from './Comments/AddComment';
import Article from './Article';
import YesNoModal from '../shared/YesNoModal';
import Comments from './Comments/Comments';
import Loader from '../shared/Loader/Loader';

import './ReadNews.scss';

const ReadNews = ({
    user,
    idToken,
    match,
    userId,
    markNewsAsRead,
    markNewsAsReadLater,
    unsubscribeFromNewsletterInAllLabels
}) => {
    const [news, setNews] = useState({title:'', content:'', readingTime:'', newsletter: {name:''}});
    const [replyToCommentId, setReplyToCommentId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    const [showComments, setShowComments] = useState(true)
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if(user && idToken) {
			const newsId = match.params.id;

			setIsLoading(true);

            markNewsAsRead([newsId], idToken)
            .then(() => {
				return getNews(newsId, idToken); 
            })
			.then((res) => {
				return res.json();
			})
            .then((result) => {
				setNews(result);

				setIsLoading(false);
			})
            .catch((err) => {
				alert("Something went wrong while trying to fetch news!");
			});
        }
    }, [user, match, idToken, markNewsAsRead]);

	const onMarkNewsAsReadLater = async () => {
        if (user) {
            try {
				const selectedNews = [match.params.id];

                await markNewsAsReadLater(selectedNews, idToken);
            } catch (err) {
                alert("Something went wrong while trying to mark news for read later!");
            }
        }
    }

    const replyHandler = (commentId) => {
        setReplyToCommentId(commentId);
        setIsCommentModalOpen(true);
    }

    const yesNoMenuOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const commentInputModalOpenHandler = () => {
        setIsCommentModalOpen(true);
    }

    const commentsInputModalCloseHandler = () => {
        if (replyToCommentId) {
            setReplyToCommentId(null)
        }

        setIsCommentModalOpen(false);
    }

    const showHideCommentsHandler = () => {
        setShowComments(!showComments);
    }

    const confirmUnsubscribeHandler = async () => {
        if(user && idToken) {
			await unsubscribeFromNewsletterInAllLabels(news.newsletter._id, idToken);
        }

        history.push('/explore-feeds');
    }

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }
  
    return (
        <div className='article'>
            <ReadNewsHeader
                newsletterName={news.newsletter.name}
                yesNoMenuOpenHandler={yesNoMenuOpenHandler}
            />

            <div className='article-body'>
                <aside className='article-menu'>
                    <ReadNewsOptionsMenu 
                        onMarkNewsReadLater={onMarkNewsAsReadLater} 
                        commentInputModalOpenHandler={commentInputModalOpenHandler}
                        title={news.title}
					/>
                </aside>

                <main className='article-main'>
                    <YesNoModal 
                        question={`Are you sure want to unsubscribe from ${news.newsletter.name}?`}
                        firstBtnText='Confirm'
                        secondBtnText='Cancel'
                        isOpen={isOpen}
                        yesNoMenuOpenHandler={yesNoMenuOpenHandler}
                        confirmHandler={confirmUnsubscribeHandler} 
                    />

                    <AddComment
                        isCommentModalOpen={isCommentModalOpen}
                        commentsInputModalCloseHandler={commentsInputModalCloseHandler}
                        newsId={match.params.id}
                        user={user}
                        idToken={idToken}
                        replyToCommentId={replyToCommentId}
                    />

					<Article
						news={news}
						showHideCommentsHandler={showHideCommentsHandler}
					/>

                    <div className='article-buttons'>
                        <button
							className='btn back-btn'
							onClick={()=>{history.push("/explore-feeds")}}
						>
							BACK TO FEEDS
						</button>

                        <button
							onClick={()=>{history.push(`/main/${news.newsletter._id}`)}}
							className='btn more-btn'
						>
							MORE FROM {news.newsletter.name.substring(0,2).toUpperCase()}
						</button>
                    </div>
                </main>

                <aside className='article-chat'>
                    {showComments
                        ? (
                            <Comments
                                user={user}
                                newsId={match.params.id}
                                userId={userId}
                                idToken={idToken}
                                isCommentModalOpen={isCommentModalOpen}
                                replyHandler={replyHandler}
                            />
                        ) : null
                    }
                </aside>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken,
    userId: state.user.userId,
});

const mapDispatchToProps = {
    markNewsAsRead,
	markNewsAsReadLater,
    unsubscribeFromNewsletterInAllLabels
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadNews);