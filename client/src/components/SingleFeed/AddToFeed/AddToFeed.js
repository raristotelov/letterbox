import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../shared/Input';
import { ReactComponent as CloseIcon } from '../assets/remove-icon.svg';
import Newsletter from './Newsletter';
import { getNewsletters } from '../../../actions/newsletterActions'
import './AddToFeed.scss';

const AddToFeed = ({ setOpen, user, feed, newsletters, getNewsletters }) => {
    const [filteredNewsletters, setFilteredNewsletters] = useState([]);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(getNewsletters)
                .catch(console.log);
        }
    }, [user, getNewsletters]);

    useEffect(() => {
        const filtered = newsletters.filter(x => !feed.newsletters.some(y => x._id === y._id));
        setFilteredNewsletters(filtered);
    }, [newsletters, feed]);

    return (
        <div className="add-to-feed-wrapper">
            <div className="add-to-feed-container">
                <div className="add-to-feed-header">
                    <button onClick={() => setOpen(false)} className="close-btn"><CloseIcon /></button>

                    <h3 className="title">Add to feed</h3>

                    <div className="search-container">
                        <Input type="text" placeholder="Find newsletter" />
                    </div>
                </div>

                <div className="add-to-feed-body">
                    <p>Newsletters</p>

                    {filteredNewsletters.map(x => <Newsletter key={x._id} newsletter={x} feedId={feed._id} />)}
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    feed: state.feed.feed,
    newsletters: state.newsletter.newsletters
})

const mapDispatchToProps = {
    getNewsletters
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFeed);