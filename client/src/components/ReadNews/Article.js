import { useState } from 'react';
import DOMPurify from 'dompurify';
import { ReactComponent as Hide } from '../shared/Icons/Hide.svg';
import { ReactComponent as Show } from '../shared/Icons/Show.svg';

import './Article.scss';

const Article = ({ news, showHideCommentsHandler }) => {
    const [showComments, setShowComments] = useState(true);
    const sanitizedContent = DOMPurify.sanitize(news.contentHtml);

    const handleShowHideComments = () => {
        setShowComments(!showComments);
        showHideCommentsHandler()
    }

    return (
        <div>
            <div className='article-date-time-comments'>
                <div className='article-date-time'>
                    <div className='article-date'>{new Date(news.date).toDateString().substring(4)}</div>
                    <div className='article-read-time'>{news.readTime} min to read</div>
                </div>
                <div className='comments-show-hide' onClick={handleShowHideComments}><span>Comments</span> {showComments?<Hide />:<Show />}</div>
            </div>
            <div className='article-title'>{news.title}</div>
            <div className='article-content' dangerouslySetInnerHTML={{__html:sanitizedContent}}></div>
        </div>
    )
}

export default Article;