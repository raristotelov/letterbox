import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getFeeds } from '../../actions/feedActions';

import { ReactComponent as Reorder } from './assets/reorder.svg';
import { ReactComponent as Create } from './assets/create.svg';

import MainLayout from '../layouts/MainLayout';
import Feed from './Feed';
import ExploreFeedsFooter from './ExploreFeedsFooter';
import FeedFormModal from './FeedFormModal';
import './ExploreFeeds.scss';

const ExploreFeeds = ({ user, admin, feeds, getFeeds }) => {
    const [addFeedOpen, setOpen] = useState(false);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => getFeeds(idToken))
                .catch(console.log);
        }
    }, [user, getFeeds]);

    return (
        <MainLayout>
            {addFeedOpen && <FeedFormModal action={'add'} setOpen={setOpen} />}
            <div className="view-container">
                <h1>Feeds</h1>
                <div className="second-header">
                    <h2>All</h2>

                    {admin && (
                        <div className="admin-icons-container">
                            <li>
                                <Reorder />
                                <span>Reorder</span>
                            </li>
                            <li onClick={() => setOpen(true)}>
                                <Create />
                                <span>Create</span>
                            </li>
                        </div>
                    )}
                </div>

                <div className="feeds-container">
                    {admin
                        ? feeds.map((f) => <Feed key={f._id} feedProps={f} img=""></Feed>)
                        : feeds.filter((f) => !f.hidden).map((f) => <Feed key={f._id} feedProps={f} img=""></Feed>)}
                </div>

                <ExploreFeedsFooter />
            </div>
        </MainLayout>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    admin: state.user.admin,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    getFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFeeds);
