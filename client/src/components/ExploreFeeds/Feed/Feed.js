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
    const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
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
            {isFeedModalOpen 
                ? (
                    <FeedFormModal
                        action={'edit'}
                        setIsFeedModalOpen={setIsFeedModalOpen}
                        feed={feedProps}
                    />
                ) : null
            }

            <Link to={singleFeedUrl}>
                <div className="img-container">
                    <img src="/feed-logo.jpg" alt="logo"></img>
                </div>
            </Link>

            <div className="props-container">
                <h3>{name}</h3>

                <div className="sources-and-admin-actions">
                    <p>{newsletters.length} sources</p>

                    {admin && (
                        <div className="admin-actions">
                            <li>
                                <Edit onClick={() => setIsFeedModalOpen(true)} />
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
