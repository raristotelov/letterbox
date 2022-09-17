import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFeed, clearFeed } from '../../actions/feedActions';
import NewsletterList from './NewsletterList/NewsletterList';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';
import AddToFeed from './AddToFeed/AddToFeed';
import { useClean } from '../../hooks';
import Loader from '../shared/Loader/Loader';

import './SingleFeed.scss';

const SingleFeed = ({ user, admin, feed, getFeed, clearFeed, match }) => {
    const [open, setOpen] = useState(false);
    const [isLoadingFeed, setIsLoadingFeed] = useState(false);

    useClean(clearFeed);
    
    const _id = match.params.feedId;
    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => {
                    setIsLoadingFeed(true);

                    return getFeed(_id, idToken)
                }).then(() => {
                    setIsLoadingFeed(false);
                })
                .catch((err) => console.log(err));
        }
    }, [user, getFeed, _id]);

    return (
        <Fragment>
            {open && <AddToFeed open={open} setOpen={setOpen} />}

            <div className='single-feed-wrapper'>
                {!isLoadingFeed ? (
                        <Fragment>
                            <div className='feed-header'>
                                <h1 className='feed-title'>{feed.name}</h1>
            
                                <div className='feed-header-nav'>
                                    <button className='feed-filter'>All</button>
            
                                    {admin && <button className='add-newsletter-btn' onClick={() => setOpen(true)}><AddIcon /> Add</button>}
                                </div>
                            </div>
    
                            <NewsletterList newsletters={feed.newsletters} isLoading={isLoadingFeed} />
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
    admin: state.user.admin,
    feed: state.feed.feed,
});

const mapDispatchToProps = {
    getFeed,
    clearFeed
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFeed);
