import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Feed from './Feed/Feed';

import './MyFeeds.scss';

const MyFeeds = ({ feeds, selected }) => {
    return (
        <div className='my-feeds'>
            <Link to='/explore-feeds'>
                <span className={`my-feeds-title ${selected ? 'selected' : ''}`}>Feeds</span>
            </Link>

            {feeds.filter((feed) => !feed.hidden).map((feed) => 
                (
                    <Feed
                        key={feed._id}
                        feed={feed}
                    />
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    feeds: state.feed.feeds
});

export default connect(mapStateToProps, null)(MyFeeds);