import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFeed, clearFeed } from '../../actions/feedActions';
import MainLayout from '../layouts/MainLayout/MainLayout';
import NewsletterList from './NewsletterList/NewsletterList';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';
import AddToFeed from './AddToFeed/AddToFeed';
import { useClean } from '../../hooks';
import './SingleFeed.scss';

const SingleFeed = ({ user, admin, feed, getFeed, clearFeed, match }) => {
    const [open, setOpen] = useState(false);
    useClean(clearFeed);
    
    const _id = match.params.feedId;
    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => getFeed(_id, idToken))
                .catch((err) => console.log(err));
        }
    }, [user, getFeed, _id]);

    return (
        <MainLayout>
            {open && <AddToFeed open={open} setOpen={setOpen} />}

            <div className="single-feed-wrapper">
                <div className="feed-header">
                    <h1 className="feed-title">{feed.name}</h1>

                    <div className="feed-header-nav">
                        <button className="feed-filter">All</button>

                        {admin && <button className="add-newsletter-btn" onClick={() => setOpen(true)}><AddIcon /> Add</button>}
                    </div>
                </div>

                <NewsletterList newsletters={feed.newsletters} />
            </div>
        </MainLayout>
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
