import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Unhide } from '../assets/unhide.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';

import { removeFeed, toggleHiddenState } from '../../../actions/feedActions';
import FeedFormModal from '../FeedFormModal';

import './Feed.scss';

const Feed = ({ feedProps, user, admin, toggleHiddenState, removeFeed }) => {
    const [editFeedOpen, setOpen] = useState(false);
    const { _id, name, hidden, newsletters } = feedProps;

    const singleFeedUrl = `/feed/${_id}`;

    const handleDelete = () => {
        if (user) {
            user.getIdToken()
                .then((idToken) => removeFeed(_id, idToken))
                .catch(console.log);
        }
    };

    const handleHiddenStateToggle = () => {
        if (user) {
            user.getIdToken()
                .then((idToken) => toggleHiddenState(_id, idToken))
                .catch(console.log);
        }
    };

    return (
        <div className="feed-container">
            {editFeedOpen && <FeedFormModal action={'edit'} setOpen={setOpen} feed={feedProps} />}
            <Link to={singleFeedUrl}>
                <div className="img-container">
                    <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" alt="logo"></img>
                </div>
            </Link>

            <div className="props-container">
                <h3>{name}</h3>

                <div className="sources-and-admin-actions">
                    <p>{newsletters.length} sources</p>

                    {admin && (
                        <div className="admin-actions">
                            <li>
                                <Edit onClick={() => setOpen(true)} />
                            </li>
                            <li>{hidden ? <Unhide onClick={handleHiddenStateToggle} /> : <Hide onClick={handleHiddenStateToggle} />}</li>
                            <li>
                                <Delete onClick={handleDelete} />
                            </li>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    admin: state.user.admin,
});

const mapDispatchToProps = {
    toggleHiddenState,
    removeFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
