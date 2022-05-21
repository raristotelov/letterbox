import { Link } from 'react-router-dom';
import './Feed.scss';

const Feed = ({ feed }) => {
    return (
        <Link to={`/feed/${feed._id}`}>
            <div className="feed">
                <span className="feed-title">{feed.name}</span>
                <span className="feed-counter">{feed.newsletters.length}</span>
            </div>
        </Link>
    );
}

export default Feed;