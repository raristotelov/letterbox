import { Fragment, useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';

import { useClean } from '../../hooks';
import { getFeed, clearFeed } from '../../actions/feedActions';
import { SearchContext } from '../../contexts/SearchContext';

import NewsletterList from './NewsletterList/NewsletterList';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';
import AddToFeed from './AddToFeed/AddToFeed';
import Loader from '../shared/Loader/Loader';

import './SingleFeed.scss';

const SingleFeed = ({ user, idToken, admin, feed, getFeed, clearFeed, match }) => {
    const [isAddToFeedModalOpen, setIsAddToFeedModalOpen] = useState(false);
    const [isLoadingFeed, setIsLoadingFeed] = useState(false);

    const searchContextObject = useContext(SearchContext);

    useClean(clearFeed);
    
    const _id = match.params.feedId;
    useEffect(() => {
        if (user) {
            setIsLoadingFeed(true);

            getFeed(_id, idToken)
                .then(() => {
                    setIsLoadingFeed(false);
                })
                .catch((err) => console.log(err));
        }
    }, [user, getFeed, _id, idToken]);

    const filteredNewsletters = feed.newsletters?.filter((newsletter) => newsletter.name.toLowerCase().includes(searchContextObject.search.toLowerCase()))

    return (
        <Fragment>
            {isAddToFeedModalOpen 
                ? (
                    <AddToFeed
                        open={isAddToFeedModalOpen}
                        setOpen={setIsAddToFeedModalOpen}
                    />
                ) : null
            }

            <div className='single-feed-wrapper'>
                {!isLoadingFeed
                    ? (
                        <Fragment>
                            <div className='feed-header'>
                                <h1 className='feed-title'>{feed.name}</h1>
            
                                <div className='feed-header-nav'>
                                    <button className='feed-filter'>All</button>
            
                                    {admin 
                                        ? (
                                            <button
                                                className='add-newsletter-btn'
                                                onClick={() => setIsAddToFeedModalOpen(true)}
                                            >
                                                <AddIcon /> Add
                                            </button>
                                        ) : null
                                    }
                                    
                                </div>
                            </div>
    
                            <NewsletterList newsletters={filteredNewsletters} isLoading={isLoadingFeed} />
                        </Fragment>
                    ) : (
                        <div className='loader'>
                            <Loader />
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    idToken: state.user.idToken,
    admin: state.user.admin,
    feed: state.feed.feed,
});

const mapDispatchToProps = {
    getFeed,
    clearFeed
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFeed);
