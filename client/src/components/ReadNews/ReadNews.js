import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { BtnFilledGreen, BtnOutlineGreen } from '../shared/Buttons/BaseBtn/BaseBtn';
import ReadNewsHeader from './ReadNewsHeader';
import ReadNewsOptionsMenu from './ReadNewsOptionsMenu';
import { getNews } from '../../services/newsService';
import { markNewsAsRead, markNewsReadLater } from '../../services/userService';
import { unsubscribeFromNewsletterInAllLabels } from '../../services/labelService';
import AddComment from './Comments/AddComment';
import Article from './Article';
import YesNoModal from '../shared/YesNoModal';
import Comments from './Comments/Comments';

import './ReadNews.scss';

const ReadNews = ({ user, match, userId }) => {
    const [news, setNews] = useState({title:'', content:'', readingTime:'', newsletter: {name:''}});
    const [replyToCommentId, setReplyToCommentId] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    const [showComments, setShowComments] = useState(true)
    const history = useHistory();

    useEffect(() => {
        if(user) {
            user.getIdToken()
            .then(async idToken => {
                    const newsId = match.params.id;
                    markNewsAsRead(newsId, idToken);
                    return getNews(newsId, idToken); 
                })
            .then(res => res.json())
            .then(setNews)
                .catch(err => console.log(err));
        }
    }, [user, match]);

     const onMarkNewsReadLater = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater([match.params.id], idToken);
                })
                .catch(err => console.log(err));
        }
    }
    const replyHandler = (commentId) => {
        setReplyToCommentId(commentId);
        setIsCommentModalOpen(!isCommentModalOpen);
    }
    const yesNoMenuOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const commentInputModalOpenHandler = () => {
        setIsCommentModalOpen(!isCommentModalOpen);
    }

    const showHideCommentsHandler = () => {
        setShowComments(!showComments);
    }

    const confirmUnsubscribeHandler = () => {
        if(user) {
            user.getIdToken()
                .then(async idToken => {
                    await unsubscribeFromNewsletterInAllLabels(news.newsletter._id, idToken);
                })
        }
        history.push('/explore-feeds');
    }
  
    return (
        <div className='article'>
            <ReadNewsHeader newsletterName={news.newsletter.name} yesNoMenuOpenHandler={yesNoMenuOpenHandler} />
            <div className='article-body'>
                <aside className='article-menu'>
                    <ReadNewsOptionsMenu 
                        onMarkNewsReadLater={onMarkNewsReadLater} 
                        commentInputModalOpenHandler={commentInputModalOpenHandler}
                        title={news.title} />
                </aside>
                <main className='article-main'>
                    <YesNoModal 
                        question={`Are you sure want to unsubscribe from ${news.newsletter.name}?`}
                        firstBtnText='Unsubscribe'
                        secondBtnText='Stay Subscribed'
                        isOpen={isOpen}
                        yesNoMenuOpenHandler={yesNoMenuOpenHandler}
                        confirmHandler={confirmUnsubscribeHandler} 
                    />

                    <AddComment
                        isCommentModalOpen={isCommentModalOpen}
                        commentInputModalOpenHandler={commentInputModalOpenHandler}
                        newsId={match.params.id}
                        user={user}
                        replyToCommentId={replyToCommentId}
                    />

                    {
                        (news.title && news.contentHtml)
                        ? <Article news = {news} showHideCommentsHandler={showHideCommentsHandler}/>
                        : <div className='loading-text'>Loading ...</div>
                    }

                    <div className='article-buttons'>
                        <BtnOutlineGreen onClick={()=>{history.push("/explore-feeds")}}>BACK TO FEEDS</BtnOutlineGreen>
                        <BtnFilledGreen onClick={()=>{history.push(`/main/${news.newsletter._id}`)}} className='sign-btn-green'>MORE FROM {news.newsletter.name.substring(0,3)}</BtnFilledGreen>
                    </div>
                </main>
                <aside className='article-chat'>
                    {
                        showComments
                        ?<Comments user={user} newsId={match.params.id} userId={userId} isCommentModalOpen={isCommentModalOpen} replyHandler={replyHandler}/>
                        :null
                    }
                </aside>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    userId: state.user.userId
});

export default connect(mapStateToProps, null)(ReadNews);