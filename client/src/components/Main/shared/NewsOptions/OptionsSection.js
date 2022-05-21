import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as Star } from '../assets/star-dark.svg';
import { ReactComponent as CheckboxUnchecked } from '../assets/checkbox-unchecked-dark.svg';
import { ReactComponent as CheckboxChecked } from '../assets/checkbox-checked.svg';
import { markNewsReadLater } from '../../../../services/userService';
import { markRead } from '../../../../actions/userActions';
import { setHideNewsIdArray } from '../../../../actions/newsletterActions';

const OptionsSection = ({
    selectedNews,
    setSelectedNews,
    news,
    user,
    markRead,
    setHideNewsIdArray }) => {

    const [marked, setMarked] = useState(false);

    useEffect(() => {
        if (selectedNews.length === news.length) {
            setMarked(true);
            return;
        }
        setMarked(false);
    }, [selectedNews, news]);

    const markAll = () => {
        if (selectedNews.length === news.length) {
            setSelectedNews([]);
            return;
        }
        setSelectedNews(news.map(x => x._id));
        setMarked(true);
    }

    const onMarkNewsReadLater = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater(selectedNews, idToken);
                })
                .catch(err => console.log(err));
        }
    }

    const onMarkAsRead = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markRead(selectedNews, idToken);
                    setSelectedNews([]);
                })
                .catch(err => console.log(err));
        }
    }

    const onHideNews = () => {
        setHideNewsIdArray(selectedNews);
    }

    return (
        <>
            <article className='news-option mark-read-later-option' onClick={onMarkNewsReadLater}>
                <Bookmark className='news-option-icon' /> <p>Read Later</p>
            </article>
            <article className='news-option' onClick={onHideNews}>
                <Hide className='news-option-icon' /> <p>Hide</p>
            </article>
            <article className='news-option' onClick={onMarkAsRead} >
                <Openbook className='news-option-icon' /> <p>Mark as read</p>
            </article>
            <article className='news-option' onClick={markAll}>
                {
                    marked ? <CheckboxChecked className='news-option-icon' />
                        : <CheckboxUnchecked className='news-option-icon' />
                } <p>Mark All</p>
            </article>
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    markRead,
    setHideNewsIdArray,
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSection);