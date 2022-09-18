import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
    markNewsAsRead,
    markNewsAsReadLater,
    hideNews,
    unhideNews
} from '../../../../actions/userActions';
import newsActionOptions from '../../../../helpers/newsActionOptions';

import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Unhide } from '../assets/unhide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as CheckboxUnchecked } from '../assets/checkbox-unchecked-dark.svg';
import { ReactComponent as CheckboxChecked } from '../assets/checkbox-checked.svg';

const OptionsSection = ({
    selectedNews,
    setSelectedNews,
    news,
    user,
    idToken,
    actions,
    markNewsAsRead,
    markNewsAsReadLater,
    hideNews,
    unhideNews
}) => {
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

    const onMarkNewsAsReadLater = async () => {
        if (user) {
            try {
                await markNewsAsReadLater(selectedNews, idToken);

                setSelectedNews([]);
            } catch (err) {
                alert("Something went wrong while trying to mark news for read later!");
            }
        }
    }

    const onMarkNewsAsRead = async () => {
        if (user) {
            try {
                await markNewsAsRead(selectedNews, idToken);

                setSelectedNews([]);
            } catch (err) {
                alert("Something went wrong while trying to mark news as read!");
            }
        }
    }

    const onHideNews = async () => {
        if (user) {
            try {
                await hideNews(selectedNews, idToken);

                setSelectedNews([]);
            } catch (err) {
                alert("Something went wrong while trying to hide news!");
            }
        }
    }

    const onUnhideNews = async () => {
        if (user) {
            try {
                await unhideNews(selectedNews, idToken);

                setSelectedNews([]);
            } catch (err) {
                alert("Something went wrong while trying to unhide news!");
            }
        }
    }

    return (
        <Fragment>
            {actions?.includes(newsActionOptions.READ_LATER) 
                ? (
                    <div
                        className='news-option mark-read-later-option'
                        onClick={onMarkNewsAsReadLater}
                    >
                        <Bookmark 
                            className='news-option-icon'
                        />
                    
                        <p>Read Later</p>
                    </div>
                ) : null
            }

            {actions?.includes(newsActionOptions.HIDE) 
                ? (
                    <div 
                        className='news-option'
                        onClick={onHideNews}
                    >
                        <Unhide 
                            className='news-option-icon'
                        />
                        
                        <p>Hide</p>
                    </div>
                ) : null
            }

            {actions?.includes(newsActionOptions.UNHIDE) 
                ? (
                    <div 
                        className='news-option'
                        onClick={onUnhideNews}
                    >
                        <Hide 
                            className='news-option-icon'
                        />
                        
                        <p>Unhide</p>
                    </div>
                ) : null
            }

            {actions?.includes(newsActionOptions.MARK_AS_READ)
                ? (
                    <div
                        className='news-option'
                        onClick={onMarkNewsAsRead}
                    >
                        <Openbook
                            className='news-option-icon'
                        />
                        
                        <p>Mark as read</p>
                    </div>
                ) : null
            }

            <div
                className='news-option'
                onClick={markAll}
            >
				{marked
					? (
						<CheckboxChecked className='news-option-icon' />
					) : (
						<CheckboxUnchecked className='news-option-icon' />
					)
				}
                
                <p>Mark All</p>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken
})

const mapDispatchToProps = {
    markNewsAsRead,
    markNewsAsReadLater,
    hideNews,
    unhideNews
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSection);