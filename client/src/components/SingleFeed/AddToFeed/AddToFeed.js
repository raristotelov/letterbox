import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getNewsletters } from '../../../actions/newsletterActions'

import Input from '../../shared/Input';
import { ReactComponent as CloseIcon } from '../assets/remove-icon.svg';
import Newsletter from './Newsletter';

import './AddToFeed.scss';

const AddToFeed = ({ setOpen, user, idToken, feed, newsletters, getNewsletters }) => {
    const [filteredNewsletters, setFilteredNewsletters] = useState([]);
    const [newsletterCriteria, setNewsletterCriteria] = useState('');

    useEffect(() => {
        if (user) {
            getNewsletters(idToken)
                .catch((err) => {
                    alert("Something went wrong while trying to get newsletters!")
                });
        }
    }, [user, getNewsletters, idToken]);

    useEffect(() => {
        const leftNewsletters = newsletters.filter(x => !feed.newsletters.some(y => x._id === y._id));

        const filteredNewsletters = leftNewsletters.filter((newsletter) => newsletter.name.toLowerCase().includes(newsletterCriteria.toLowerCase()));

        setFilteredNewsletters(filteredNewsletters);
    }, [newsletters, feed, newsletterCriteria]);

    const handleChange = (event) => {
        const value = event.target.value;

        setNewsletterCriteria(value);
      };

    return (
        <div className="add-to-feed-wrapper">
            <div className="add-to-feed-container">
                <div className="add-to-feed-header">
                    <button
                        onClick={() => setOpen(false)}
                        className="close-btn"
                    >
                        <CloseIcon />
                    </button>

                    <h3 className="title">Add to feed</h3>
                </div>

                <div className="input-container">
                    <div className="search-container">
                        <Input
                            type="text"
                            placeholder="Find newsletter"
                            value={newsletterCriteria}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="add-to-feed-body">
                    <p>Newsletters</p>

                    {filteredNewsletters.map(x => <Newsletter key={x._id} newsletter={x} feedId={feed._id} />)}
                </div>

                <div className="new-feed-save-btn"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    idToken: state.user.idToken,
    feed: state.feed.feed,
    newsletters: state.newsletter.newsletters
})

const mapDispatchToProps = {
    getNewsletters
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFeed);