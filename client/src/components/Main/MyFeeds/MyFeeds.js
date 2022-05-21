import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFeeds } from '../../../actions/feedActions';
import Feed from './Feed/Feed';
import './MyFeeds.scss';

const MyFeeds = ({ user, feeds, getFeeds }) => {

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => getFeeds(idToken))
                .catch(console.log);
        }
    }, [user, getFeeds]);

    return (
        <div className="my-feeds">
            <Link to="/explore-feeds">
                <span className="my-feeds-title">Feeds</span>
            </Link>

            {
                feeds
                    .map((feed) =>
                    (
                        <Feed
                            key={feed._id}
                            feed={feed} />
                    )
                    )
            }

            {/* {<button className="my-feeds-show-more">show more</button>} */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    getFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFeeds);