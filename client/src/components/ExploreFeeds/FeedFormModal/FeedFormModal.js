import { connect } from 'react-redux';

import { useForm } from '../../../hooks';

import { addFeed, changeFeed } from '../../../actions/feedActions';

import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';

import Input from '../../shared/Input';

import './FeedFormModal.scss';

const FeedFormModal = ({ action, setIsFeedModalOpen, user, idToken, addFeed, changeFeed, feed }) => {
    const [stateInput, setFeedName] = useForm({ feedName: feed ? feed.name : '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (action === 'add') {
            if (user) {
                addFeed(stateInput.feedName, idToken)
                    .catch((err) => {
                        alert('Something went wron while trying to add feed!');
                    });
            }
        } else if (action === 'edit') {
            if (user) {
                changeFeed(feed._id, stateInput.feedName, idToken)
                    .catch((err) => {
                        alert('Something went wron while trying to edit feed!');
                    });
            }
        }

        setIsFeedModalOpen(false);
    };

    return (
        <div className="new-feed-wrapper">
            <div className="new-feed-container">
                <form
                    className="new-feed-form"
                    onSubmit={handleSubmit}
                >
                    <div className="new-feed-header">
                        <button
                            type="button"
                            onClick={() => setIsFeedModalOpen(false)}
                            className="new-feed-close-btn"
                        >
                            <CloseIcon />
                        </button>

                        <h3 className="new-feed-title">
                            {action === 'add' ? 'New Feed' : 'Edit Feed'}
                        </h3>
                    </div>

                    <div className="input-container">
                        <div className="name-input-container">
                            <Input
                                id="feedName"
                                type="text"
                                placeholder="Name your Feed"
                                value={stateInput.feedName ? stateInput.feedName : ''}
                                onChange={setFeedName}
                            />
                        </div>
                    </div>

                    <button className="new-feed-save-btn">
                        <span className="save-btn-txt">Save</span>

                        <span className="save-btn-icon">
                            <SaveIcon />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    idToken: state.user.idToken,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    addFeed,
    changeFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedFormModal);
