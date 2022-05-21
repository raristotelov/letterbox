import { connect } from 'react-redux';

import { useForm } from '../../../hooks';

import { addFeed, changeFeed } from '../../../actions/feedActions';

import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';
import { ReactComponent as UploadIcon } from './assets/upload.svg';

import Input from '../../shared/Input';

import './FeedFormModal.scss';

const FeedFormModal = ({ action, setOpen, user, addFeed, changeFeed, feed }) => {
    const [stateInput, setFeedName] = useForm({ feedName: feed ? feed.name : '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);

        if (action === 'add') {
            if (user) {
                user.getIdToken()
                    .then((idToken) => addFeed(stateInput.feedName, idToken))
                    .catch(console.log);
            }
        } else if (action === 'edit') {
            if (user) {
                user.getIdToken()
                    .then((idToken) => changeFeed(feed._id, stateInput.feedName, idToken))
                    .catch(console.log);
            }
        }
    };

    return (
        <div className="new-feed-wrapper">
            <div className="new-feed-container">
                <form className="new-feed-form" onSubmit={handleSubmit}>
                    <div className="new-feed-header">
                        <button className="new-feed-close-btn" type="button" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </button>
                        <h3 className="new-feed-title">{action === 'add' ? 'New Feed' : 'Edit Feed'}</h3>
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

                        <div className="drop-zone">
                            <span className="drop-zone__prompt">Drag and drop files here or upload</span>
                            <input type="file" name="myFile" className="drop-zone__input" />
                            <div className="icon-container">
                                <UploadIcon />
                            </div>
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
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    addFeed,
    changeFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedFormModal);
