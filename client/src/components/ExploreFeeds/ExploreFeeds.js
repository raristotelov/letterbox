import { Fragment, useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';

import { getFeeds } from '../../actions/feedActions';
import { SearchContext } from '../../contexts/SearchContext';

import { ReactComponent as Reorder } from './assets/reorder.svg';
import { ReactComponent as Create } from './assets/create.svg';

import Feed from './Feed';
import ExploreFeedsFooter from './ExploreFeedsFooter';
import FeedFormModal from './FeedFormModal';

import './ExploreFeeds.scss';

const ExploreFeeds = ({ user, idToken, admin, feeds, getFeeds }) => {
    const [addFeedOpen, setOpen] = useState(false);

    const searchContextObject = useContext(SearchContext);

    useEffect(() => {
        if (user) {
            getFeeds(idToken)
                .catch((err) => {
                    alert('Something went wrong while trying to fetch feeds!');
                });
        }
    }, [user, getFeeds, idToken]);

    let filteredFeeds =  feeds.filter((feed) => feed.name.toLowerCase().includes(searchContextObject.search.toLowerCase()))

    return (
        <Fragment>
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
                        ? filteredFeeds.map((f) => 
                        (
                            <Feed 
                                key={f._id}
                                feedProps={f}
                                img=""
                            />
                        )) : filteredFeeds.filter((f) => !f.hidden).map((f) => 
                        (
                            <Feed
                                key={f._id}
                                feedProps={f}
                                img=""
                            />
                        ))
                    }
                </div>

                <ExploreFeedsFooter />
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    idToken: state.user.idToken,
    admin: state.user.admin,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    getFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFeeds);
